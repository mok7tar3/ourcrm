<?php

namespace App\Http\Controllers\Auth;

use App\Events\VerifyReCaptchaToken;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Api\Faq;
use App\Models\Faq as ModelsFaq;
use App\Models\Utility;
use App\Models\User;
use App\Models\LoginDetails;
use App\Providers\RouteServiceProvider;
use App\Services\ActiveDirectoryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use WhichBrowser\Parser;

class AuthenticatedSessionController extends Controller
{
    public $authService;
    /**
     * Display the login view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */


    public function __construct(ActiveDirectoryService $authService)     {
        $this->authService = $authService;
        if(!file_exists(storage_path() . "/installed"))
        {
            header('location:install');
            die;
        }
    }

    /*protected function authenticated(Request $request, $user)
    {
        if($user->delete_status == 1)
        {
            auth()->logout();
        }
        return redirect('/check');
    }*/

    public function createOrUpdateUser($response)
    {
        $admins = ['thakami@KSU.EDU.SA', 'malhadi@KSU.EDU.SA', 'ealhotan@KSU.EDU.SA'];
        $role = in_array($response['Email'], $admins) ? 'Admin' : 'User';
        $user = User::where('email', $response['Email'])->first();
        if (! $user) {
            $user = User::create([
                'username' => $response['UserName'],
                'email' => $response['Email'],
                'name' => $response['Name'],
                'role' => $role,
                'session_token' => $response['SessionToken']
            ]);
        }
        
        return $user;
    }

    public function store(LoginRequest $request)
    {
        $data = $request->validated();
        // try {
        //     $username = explode('@', $data['email'])[0];
        //     $response = $this->authService->authService($username, $data['password']);            
        // } catch (\Symfony\Component\Translation\Exception\NotFoundResourceException $e) {
        //     return redirect()->route('login')->with('error', 'User not found');
        // } catch (\Throwable $th) {
        //     return redirect()->route('login')->with('error', 'Wrong email or password');
        // }
        $request->authenticate();

        $request->session()->regenerate();
        // $user = $this->createOrUpdateUser($response);
        // $user->assignRole($user->role);
        // if (! Auth::loginUsingId($user->id, false)) {
        //     return redirect()->route('login')->with('error', 'Something went wrong!');
        // }  
        // Get authenticated user
        $user = Auth::user();

        // Check if user is deleted
        if ($user->delete_status == 1) {
            Auth::logout();
            return redirect()->route('login');
        }

        // Check if login is disabled
        if (!$user->is_enable_login) {
            Auth::logout();
            return redirect()->route('login')->with('error', 'Your account has been disabled by admin.');
        }

        // Retrieve IP address (use request instead of hardcoded value)
        $ip = request()->ip(); // Automatically fetches the user's IP

        // Fetch location and browser details safely
        try {
            $query = Http::timeout(5)->get("http://ip-api.com/json/{$ip}")->json();
        } catch (\Exception $e) {
            Log::error('IP API error: ' . $e->getMessage());
            $query = [];
        }

        // Detect browser details
        $whichbrowser = new Parser(request()->header('User-Agent'));
        
        if ($whichbrowser->device->type === 'bot') {
            return; // Stop execution if a bot is detected
        }

        // Detect referrer details
        $referrer = request()->headers->get('referer') ? parse_url(request()->headers->get('referer')) : null;

        // Add additional user details
        $query = array_merge($query, [
            'browser_name'     => $whichbrowser->browser->name ?? 'Unknown',
            'os_name'          => $whichbrowser->os->name ?? 'Unknown',
            'browser_language' => substr(request()->header('Accept-Language'), 0, 2) ?? 'Unknown',
            'device_type'      => get_device_type(request()->header('User-Agent')),
            'referrer_host'    => $referrer['host'] ?? null,
            'referrer_path'    => $referrer['path'] ?? null,
        ]);

        // Set timezone if available
        if (!empty($query['timezone'])) {
            date_default_timezone_set($query['timezone']);
        }

        // Convert query data to JSON
        $json = json_encode($query);

        // Store login details for non-admin users
        if ($user->type !== 'Admin') {
            LoginDetails::create([
                'user_id'    => $user->id,
                'ip'         => $ip,
                'date'       => now(),
                'details'    => $json,
                'role'       => 'User',
                'created_by' => $user->parent,
            ]);
        }

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function showLoginForm($lang = '')
    {
        $setting      = Utility::settings();
        if ($lang == '') {
            $lang = $setting['DEFAULT_LANG'] ?? 'en';
        }

        \App::setLocale($lang);

        return view('auth.login', compact('lang','setting'));
    }

    public function showLinkRequestForm($lang = '')
    {
        if ($lang == '') {
            $lang = Utility::getSettingValByName('DEFAULT_LANG') ?? 'en';
        }
        \App::setLocale($lang);

        /*return view('auth.forgot-password', compact('lang'));*/
        return view('auth.passwords.email', compact('lang'));
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}


function get_device_type($user_agent)
    {
        $mobile_regex = '/(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo)/i';
        $tablet_regex = '/(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i';
        if (preg_match_all($mobile_regex, $user_agent)) {
            return 'mobile';
        } else {
            if (preg_match_all($tablet_regex, $user_agent)) {
                return 'tablet';
            } else {
                return 'desktop';
            }
        }
    }
