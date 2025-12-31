<?php

namespace App\Exports;

use App\Models\Ticket;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnWidths;

class NewTicketExport implements FromCollection, WithHeadings, WithMapping, WithColumnWidths
{
    public function collection()
    {
        $tickets = Ticket::with(['tcategory', 'priorities']);
        if (Auth::user()->role == 'User') {
            $tickets = $tickets->where('created_by', Auth::id());
        }
        return $tickets->get();
    }

    public function map($ticket): array
    {
        return [
            $ticket->id,
            $ticket->tcategory->name ?? '',
            $ticket->priorities->name ?? '',
            $ticket->subject,
            $ticket->status,
            $ticket->description,
        ];
    }

    public function headings(): array
    {
        return [
            'ID',
            'Category',
            'Priority',
            'Subject',
            'Status',
            'Description',
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 10,
            'B' => 20,
            'C' => 20,
            'D' => 30,
            'E' => 15,
            'F' => 60, // wide column for description
        ];
    }
}
