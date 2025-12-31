<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'saml2/KingSaud-SAML-PROD/acs',
        'saml2/KingSaud-SAML-PROD/sls',
        'saml2/metadata',
        'home'
    ];

}
