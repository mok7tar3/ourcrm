<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\SubCategory;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    // public function index(Request $request)
    // {
    //     $subcategories   = SubCategory::count();
    //     $categories   = Category::count();
    //     $open_ticket  = Ticket::whereIn('status', ['On Hold','In Progress'])->count();
    //     $close_ticket = Ticket::where('status', '=', 'Closed')->count();
    //     $agents       = User::where('parent',\Auth::user()->createId())->count();


    //     $categoriesChart = Ticket::select(
    //         [
    //             'categories.name',
    //             'categories.color',
    //             \DB::raw('count(*) as total'),
    //         ]
    //     )->join('categories', 'categories.id', '=', 'tickets.category')->groupBy('categories.id')->get();

    //     $chartData = [];
    //     $chartData['color'] = [];
    //     $chartData['name']  = [];
    //     $chartData['value'] = [];

    //     if(count($categoriesChart) > 0)
    //     {
    //         foreach($categoriesChart as $category)
    //         {
    //             $chartData['name'][]  = $category->name;
    //             $chartData['value'][] = $category->total;
    //             $chartData['color'][] = $category->color;
    //         }
    //     }

    //     $monthData = [];
    //     $barChart  = Ticket::select(
    //         [
    //             \DB::raw('MONTH(created_at) as month'),
    //             \DB::raw('YEAR(created_at) as year'),
    //             \DB::raw('count(*) as total'),
    //         ]
    //     )->where('created_at', '>', \DB::raw('DATE_SUB(NOW(),INTERVAL 1 YEAR)'))->groupBy(
    //         [
    //             \DB::raw('MONTH(created_at)'),
    //             \DB::raw('YEAR(created_at)'),
    //         ]
    //     )->get();


    //     $start = \Carbon\Carbon::now()->startOfYear();

    //     for ($i = 0; $i <= 11; $i++) {

    //         $monthData[$start->format('M')] = 0;
    //         foreach($barChart as $chart)
    //         {
    //             if(intval($chart->month) == intval($start->format('m')))
    //             {
    //                 $monthData[$start->format('M')] = $chart->total;
    //             }
    //         }
    //         $start->addMonth();
    //     }
    //     return view('admin.dashboard.index', compact('categories', 'subcategories','open_ticket', 'close_ticket', 'agents', 'chartData', 'monthData'));
    // }
    public function index(Request $request)
    {
        if (auth()->user()->role == 'Admin') {
            $stats = [
                'good_reviews' => Ticket::where('review', '>', 3)->count(),
                'perfect_reviews' => Ticket::where('review', 5)->count(),
                'no_reviews' => Ticket::whereNull('review')->count(),
                'low_reviews' => Ticket::where('review', '<', 3)->count(),
            ];
        } else {
            $stats = [];
        }
        // Existing code
        $subcategories   = SubCategory::count();
        $categories      = Category::count();
        $open_ticket     = Ticket::whereIn('status', ['On Hold', 'In Progress'])->count();
        $agent_open_ticket     = Ticket::whereIn('status', ['On Hold', 'In Progress', 'New Ticket'])->where('created_by', Auth::id())->count();
        $close_ticket    = Ticket::where('status', '=', 'Closed')->count();
        $agent_close_ticket    = Ticket::where('status', '=', 'Closed')->where('created_by', Auth::id())->count();
        $agents          = User::count();

        // Data for Category Chart (Existing Code)
        $locale = app()->getLocale();

        if (! in_array($locale, ['ar', 'en'])) {
            $locale = 'en';
        }

        $categoriesChart = Ticket::select([
                "categories.title_{$locale}",
                'categories.color',
                'tickets.created_by',
                \DB::raw('count(*) as total'),
            ])
            ->join('categories', 'categories.id', '=', 'tickets.category')
            ->groupBy('categories.id');
            // ->get();


        $chartData = ['color' => [], 'title' => [], 'value' => []];

        if (Auth::user()->role == 'User' || Auth::user()->role == 'Dean') {

            $categoriesChart = $categoriesChart->where('tickets.created_by', Auth::id());
        }
        $title = 'title_'.$locale;
        $categoriesChart = $categoriesChart->get();
        foreach ($categoriesChart as $category) {
            $chartData['title'][]  = $category->$title;
            $chartData['value'][] = $category->total;
            $chartData['color'][] = $category->color;
        }


        // Data for Monthly Bar Chart (Existing Code)
        $monthData = [];
        $barChart  = Ticket::select(
            [
                \DB::raw('MONTH(created_at) as month'),
                \DB::raw('YEAR(created_at) as year'),
                \DB::raw('count(*) as total'),
            ]
        )->where('created_at', '>', \DB::raw('DATE_SUB(NOW(),INTERVAL 1 YEAR)'))->groupBy(
            [
                \DB::raw('MONTH(created_at)'),
                \DB::raw('YEAR(created_at)'),
            ]
        );
        if (Auth::user()->role == 'User' || Auth::user()->role == 'Dean') {
            $barChart = $barChart->where('tickets.created_by', Auth::id());
        }
        $barChart = $barChart->get();
        $start = \Carbon\Carbon::now()->startOfYear();
        for ($i = 0; $i <= 11; $i++) {
            $monthData[$start->format('M')] = 0;
            foreach ($barChart as $chart) {
                if (intval($chart->month) == intval($start->format('m'))) {
                    $monthData[$start->format('M')] = $chart->total;
                }
            }
            $start->addMonth();
        }

        // New code for Status Chart
        $statusChart = Ticket::select('status', \DB::raw('count(*) as total'))
            ->whereNotNull('status')
            ->where('status', '!=', '')
            ->groupBy('status');

        if (Auth::user()->role == 'User' || Auth::user()->role == 'Dean') {
            $statusChart->where('tickets.created_by', Auth::id());
        }

        $statusChart = $statusChart->get();

        $statusData = [
            'name' => [],
            'value' => []
        ];

        foreach ($statusChart as $status) {
            $statusData['name'][] = $status->status;
            $statusData['value'][] = $status->total;
        }

        // ----
        $priorityChart = Ticket::select([
            'priorities.title_'.$locale.' as priority_name',
            'priorities.color as priority_color',
            \DB::raw('count(*) as total')
        ])

        ->join('priorities', 'priorities.id', '=', 'tickets.priority')
        ->groupBy('priorities.id');
    $priorityData = [
        'name' => [],
        'color' => [],
        'value' => [],
    ];

    if (Auth::user()->role == 'User' || Auth::user()->role == 'Dean') {
        $priorityChart = $priorityChart->where('tickets.created_by', Auth::id());
    }
    $priorityChart = $priorityChart->get();
    foreach ($priorityChart as $priority) {
        $priorityData['name'][] = $priority->priority_name;
        $priorityData['value'][] = $priority->total;
        $priorityData['color'][] = $priority->priority_color;
    }

    return view('admin.dashboard.index', compact('categories', 'stats', 'subcategories', 'open_ticket', 'close_ticket', 'agents', 'chartData', 'monthData', 'statusData', 'priorityData', 'agent_open_ticket', 'agent_close_ticket'));
    }
}
