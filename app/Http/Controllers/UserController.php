<?php

namespace App\Http\Controllers;

use App;
use App\Http\Requests\UserAddRequest;
use App\Models\User;
use App\Models\Category;
use App\Models\UserCatgory;
use Illuminate\Http\Request;
use App\Models\Utility;
use App\Models\LoginDetails;
use App\Models\SubCategory;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Illuminate\Validation\Rule;


class UserController extends Controller
{
    public function __construct()
    {
        // $this->authorizeResource(User::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        if($user->can('manage-users'))
        {
            // $users = User::where('parent', Auth::user()->getCreatedBy())->get();
            $users = User::all();
            return view('admin.users.index', compact('users'));
        }
        else
        {
            return view('403');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {
    //     $user = \Auth::user();
    //     $categories = Category::where('created_by',\Auth::user()->createId())->get()->pluck('name','id');
    //     $user->categories  = explode(',', $user->categories);
    //     if($user->can('create-users'))
    //     {
    //         $roles = Role::get();
    //         return view('admin.users.create', compact('roles','categories'));
    //     }
    //     else
    //     {
    //         return view('403');
    //     }
    // }

    public function create()
    {
        $locale = app()->getLocale();

        if (! in_array($locale, ['ar', 'en'])) {
            $locale = 'en';
        }
        $user = \Auth::user();
        $categories = Category::all()->pluck('title_'.$locale, 'id');
        // $user->categories = explode(',', $user->categories);

        // $subcategories = SubCategory::where('created_by', \Auth::user()->createId())->get()->pluck('name', 'id');
        $subcategories = SubCategory::pluck('title_'.$locale, 'id');

        if ($user->can('create-users')) {
            $roles = Role::get();
            return view('admin.users.create', compact('roles', 'categories', 'subcategories'));
        } else {
            return view('403');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $user = \Auth::user();
        if($user->can('create-users'))
        {
            $validator = \Validator::make(
                $request->all(), [

                                    'name'    => 'required|string|max:255',
                                    'email'   => 'required|string|email|max:255|unique:users',
                                    'categories' => 'required',
                               ]
            );
            if($request->avatar)
            {
                $validation['avatar'] = 'required|image';
            }

            if($validator->fails())
            {
                $messages = $validator->getMessageBag();
                return redirect()->back()->with('error', $messages->first());
            }

            $user['is_enable_login']       = 0;
            if(!empty($request->password_switch) && $request->password_switch == 'on')
            {
                $user['is_enable_login']   = 1;
                $validator = \Validator::make(
                    $request->all(), ['password' => 'required|min:6']
                );

                if($validator->fails())
                {
                    return redirect()->back()->with('error', $validator->errors()->first());
                }
            }
            $post = [
                'name' => $request->name,
                'role' => $request->role,
                'role' => $request->role,
                'email' => $request->email,
                'password' => !empty($request->password) ? \Hash::make($request->password) : null,
                'parent' => Auth::user()->getCreatedBy(),
                'is_enable_login' => $request->password_switch == 'on' ? '1' : '0',
                // 'category_id'=> $request->category_id,

            ];

            // dd($post);
            if($request->avatar)
            {
               $filenameWithExt = $request->file('avatar')->getClientOriginalName();
               $filename        = pathinfo($filenameWithExt, PATHINFO_FILENAME);
               $extension       = $request->file('avatar')->getClientOriginalExtension();
               $fileNameToStore = $filename . '_' . time() . '.' . $extension;
               $url = '';
               $dir        = 'public/';
               $path = Utility::upload_file($request,'avatar',$fileNameToStore,$dir,[]);
               if($path['flag'] == 1){
                   $url = $path['url'];
               }else{
                   return redirect()->back()->with('error', __($path['msg']));
               }
               $post['avatar'] = $fileNameToStore;
            }



            // $user = User::create($post);
            // foreach($request->categories as $value)
            // {
            //     $category = UserCatgory::create([
            //     'user_id' => $user->id,
            //     'category_id' => $value
            //     ]);
            // }
            $user = User::create($post);
            $user->category_id = implode(',', $request->categories);
            $user->subcategory = implode(',', $request->subcategories);
            // dd($user);
            $user->save();

            $role = Role::where('name', $request->role)->first();
            if($role)
            {
                $user->assignRole($role);
                $user->userDefaultDataRegister($user->id);
            }

            // $user_role = Role::where('name',Auth::user()->getCreatedBy())->pluck('id');
            // $role = Role::find($user_role);
            // if($role)
            // {
            //     $user->assignRole($role);
            // }

            // slack //

            $settings  = Utility::settings(\Auth::user()->createId());
            if(isset($settings['user_notification']) && $settings['user_notification'] ==1){
                $uArr = [
                    'email' => $user->email,
                    'password' => $request->password,
                    'user_name'  => \Auth::user()->name,
                ];
                Utility::send_slack_msg('new_user', $uArr);
            }

            // telegram //

            $settings  = Utility::settings(\Auth::user()->createId());
            if(isset($settings['telegram_user_notification']) && $settings['telegram_user_notification'] ==1){
                $uArr = [
                    'email' => $user->email,
                    'password' => $request->password,
                    'user_name'  => \Auth::user()->name,
                ];
                Utility::send_telegram_msg('new_user', $uArr);
            }



            $uArr = [
                'email' => $user->email,
                'password' => $request->password,
            ];


            $module = 'New User';
            $webhook =  Utility::webhookSetting($module,$user->created_by);

            if ($webhook) {
                $parameter = json_encode($user);
                // 1 parameter is  URL , 2 parameter is data , 3 parameter is method
                $status = Utility::WebhookCall($webhook['url'], $parameter, $webhook['method']);
                if ($status == true) {

                    return redirect()->back()->with('success', __('user successfully created!'));
                } else {
                    return redirect()->back()->with('error', __('Webhook call failed.'));
                }
            }

            $resp = Utility::sendEmailTemplate('new_user', [$user->id => $user->email], $uArr);


            return redirect()->route('admin.users')->with('success', __('User created successfully'));
        }
        else
        {
            return view('403');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $locale = app()->getLocale();

        if (! in_array($locale, ['ar', 'en'])) {
            $locale = 'en';
        }
        $userObj = \Auth::user();
        $categories = Category::all()->pluck('name', 'id');


        $userCategory = User::find($user->id);
        $category_list = explode(',',$userCategory->category_id);

        $subcategories = SubCategory::pluck('title_'.$locale, 'id');
        $categories = Category::pluck('title_'.$locale, 'id');
        $subcategory_list = explode(',',$userCategory->subcategory);
        $categories->prepend(__('Select Category'), '');

        $user->categories  = explode(',', $user->categories);

        if ($userObj->can('edit-users') || $user->id == $userObj->id) {
            $roles = Role::get();
            return view('admin.users.edit', compact('user', 'userObj','subcategories','subcategory_list' ,'roles', 'categories', 'category_list'));
        }
        else
        {
            return view('403');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $userObj = \Auth::user();

        $validator = \Validator::make(
            $request->all(), [
                               'name'    => 'required|string|max:255',
                              'email' => ['required',
                              Rule::unique('users')->where(function ($query)  use ($user) {
                              return $query->whereNotIn('id',[$user->id])->where('parent',  \Auth::user()->createId());
                            })
                            ],
                           ]
        );

        if($validator->fails())
        {
            $messages = $validator->getMessageBag();
            return redirect()->back()->with('error', $messages->first());
        }
            $user->name  = $request->name;
            $user->email = $request->email;
            $user->role = $request->role;
            if ($request->categories) {
                $user->category_id = implode(',', $request->categories);
            }
            if ($request->subcategories) {
                $user->subcategory = implode(',', $request->subcategories);
            }



            // if($request->categories)
            // {
            //     UserCatgory::where('user_id',$user->id)->delete();
            //     // foreach($request->categories as $value)
            //     // {
            //         $category = UserCatgory::create([
            //         'user_id' => $user->id,
            //         'category_id' => implode(',', $request->categories)
            //         ]);
            //     // }


            // }


            if($request->avatar)
            {
                $request->validate(['avatar' => 'required|image']);

                // $avatarName = 'avatar-' . time() . '.' . $request->avatar->getClientOriginalExtension();
                // $request->avatar->storeAs('public', $avatarName);
                // $user->update(['avatar' => $avatarName]);

                $filenameWithExt = $request->file('avatar')->getClientOriginalName();
                $filename        = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                $extension       = $request->file('avatar')->getClientOriginalExtension();
                $fileNameToStore = $filename . '_' . time() . '.' . $extension;
                $url = '';
                $dir        = 'public/';

                $path = Utility::upload_file($request,'avatar',$fileNameToStore,$dir,[]);
                if($path['flag'] == 1){
                    $url = $path['url'];
                }else{
                    return redirect()->back()->with('error', __($path['msg']));
                }
                $user->update(['avatar' => $fileNameToStore]);
            }

            if($request->role && $request->user()->can('edit-users'))
            // if($request->role && $request->user()->can('edit-users') && !$user->isme)
            {
                $role = Role::where('name' , $request->role)->first();
                if($role)
                {
                    $user->syncRoles([$role]);
                }
            }
            $user->save();
            // return redirect()->back()->with('success', __('User updated successfully'));
            return redirect()->route('admin.users')->with('success', __('User updated successfully'));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $objUser = \Auth::user();
        if($objUser->can('delete-users'))
        {
            $user->delete();

            return redirect()->route('admin.users')->with('success', __('User deleted successfully'));
        }
        else
        {
            return view('403');
        }
    }

    public function roles()
    {
        return response()->json(Role::get());
    }


    public function userPassword($id)
    {
        $eId  = \Crypt::decrypt($id);
        $user = User::find($eId);

        $employee = User::where('id', $eId)->first();

        return view('admin.users.reset', compact('user', 'employee'));
    }

    public function userPasswordReset(Request $request, $id)
    {
        $validator = \Validator::make(
            $request->all(), [
                               'password' => 'required|confirmed|same:password_confirmation',
                           ]
        );

        if($validator->fails())
        {
            $messages = $validator->getMessageBag();
            return redirect()->back()->with('error', $messages->first());
        }

        $user      = User::where('id', $id)->first();
        $user->forceFill([
            'password' => Hash::make($request->password),
        ])->save();

        return redirect()->route('admin.users')->with('success', 'User Password successfully updated.');
    }

    public function userlog(Request $request)
    {
        $authUser = Auth::user();

        // Get selected month or default to current month
        $month = $request->input('month') ?: now()->format('Y-m');
        $startOfMonth = Carbon::parse($month)->startOfMonth()->toDateString();
        $endOfMonth   = Carbon::parse($month)->endOfMonth()->toDateString();

        // Build users list (you can re-enable parent filter if needed)
        $usersList = User::orderBy('name')->pluck('name', 'id');
        $usersList->prepend(__('All Users'), '');

        // Start query
        $users = DB::table('login_details')
            ->join('users', 'login_details.user_id', '=', 'users.id')
            ->select(
                'login_details.*',
                'users.name as user_name',
                'users.email as user_email'
            );

        // === Apply filters ===
        if ($request->filled('month')) {
            // Make sure date field matches DB format (Y-m-d or datetime)
            $users->whereBetween(DB::raw('DATE(login_details.date)'), [$startOfMonth, $endOfMonth]);
        }

        if ($request->filled('user')) {
            $users->where('login_details.user_id', $request->user);
        }

        // Order and fetch results
        $users = $users->orderByDesc('login_details.id')->get();

        return view('admin.users.userLog', compact('users', 'usersList'));
    }



    public function userlogview($id){
        $userlog = LoginDetails::find($id);
        return view('admin.users.viewUserLog', compact('userlog'));
    }

    public function userlogDestroy($id){
        $userlog = LoginDetails::find($id);
        $userlog->delete();
        return redirect()->back()->with('success', 'User Log Deleted Successfully.');
    }

    public function LoginManage($id)
    {
            $eId        = \Crypt::decrypt($id);
            $user = User::find($eId);
            if($user->is_enable_login == 1)
            {
                $user->is_enable_login = 0;
                $user->save();
                return redirect()->route('admin.users')->with('success', 'User login disable successfully.');

            }
            else
            {
                $user->is_enable_login = 1;
                $user->save();
                return redirect()->route('admin.users')->with('success', 'User login enable successfully.');
            }


    }

    public function profile()
    {
        $user = \Auth::user();

        return view('admin.users.profile', compact('user'));
    }


    public function editprofile(Request $request,  $id)
    {
            $userObj = \Auth::user();

            // dd($userObj->can('edit-users') || $id == $userObj->id);
            if($userObj->can('edit-users') || $id == $userObj->id)
            {

                $user = User::find($id);
                $user->name  = $request->name;
                $user->email = $request->email;

                if($request->password)
                {
                    $user->update(['password' => Hash::make($request->password)]);
                }

                if($request->avatar)
                {

                    $request->validate(['avatar' => 'required|image']);


                    $filenameWithExt = $request->file('avatar')->getClientOriginalName();
                    $filename        = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                    $extension       = $request->file('avatar')->getClientOriginalExtension();
                    $fileNameToStore = $filename . '_' . time() . '.' . $extension;
                    $url = '';
                    $dir        = 'public/';

                    $path = Utility::upload_file($request,'avatar',$fileNameToStore,$dir,[]);
                    if($path['flag'] == 1){
                        $url = $path['url'];
                    }else{
                        return redirect()->route('admin.users', \Auth::user()->id)->with('error', __($path['msg']));
                    }
                    $user->update(['avatar' => $fileNameToStore]);
                }
                $user->update();
                return redirect()->back()->with('success', __('User updated successfully'));

                // return redirect()->route('admin.users')->with('success', __('User updated successfully'));
            }
            else
            {
                return view('403');
            }
    }


}

