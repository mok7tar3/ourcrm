<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use OneLogin\Saml2\Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;

class SamlController extends Controller
{
    private function getSamlAuth(): Auth
    {
        $settings = config('saml');
        return new Auth($settings);
    }

    public function login()
    {
        $auth = $this->getSamlAuth();
        return redirect($auth->login());
    }

    public function acs(Request $request)
    {
        $auth = $this->getSamlAuth();
        $auth->processResponse();

        if (!$auth->isAuthenticated()) {
            abort(401, 'SAML Authentication failed');
        }

        $userEmailOrId = $auth->getNameId();
        $samlAttributes = $auth->getAttributes();

        $fullName = null;

        if (!empty($samlAttributes['DN'][0])) {
            if (preg_match('/CN=([^,]+)/', $samlAttributes['DN'][0], $matches)) {
                $fullName = trim($matches[1]);
            }
        }

        $username = $samlAttributes['username'][0] ?? $userEmailOrId;

        $email = $username . '@KSU.EDU.SA';

        $user = User::where('email', $email)->first();

        if (!$user) {
            $user = User::create([
                'email' => $email,
                'name'  => $fullName ?? $username,
                'role'  => 'User',
            ]);

            $user->assignRole($user->role);
        }

        Session::put('is_sso', true);
        Session::save();

        FacadesAuth::login($user);

        return redirect()->intended(route('admin.dashboard'));
    }



    public function logout(Request $request)
    {
        $auth = $this->getSamlAuth();

        FacadesAuth::logout();
        Session::invalidate();
        Session::regenerateToken();

        return redirect($auth->logout(
            url('/saml2/KingSaud-SAML-PROD/sls')
        ));
    }

    public function sls(Request $request)
    {
        $auth = $this->getSamlAuth();

        $auth->processSLO(false, null, function () {
            FacadesAuth::logout();
            Session::invalidate();
            Session::regenerateToken();
        });

        return redirect('home');
    }

}
