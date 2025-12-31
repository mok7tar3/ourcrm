@php
use App\Models\Utility;

    $setting = App\Models\Settings::colorset();
    $color = !empty($setting['color']) ? $setting['color'] : 'theme-3';

    if(isset($setting['color_flag']) && $setting['color_flag'] == 'true')
    {
        $themeColor = 'custom-color';
    }
    else {
        $themeColor = $color;
    }


    $logo = Utility::get_superadmin_logo();
    $logos = \App\Models\Utility::get_file('uploads/logo/');

    $settings = Utility::settings();

    $SITE_RTL = !empty($settings['SITE_RTL']) ? $settings['SITE_RTL'] : 'off';
    $lang = app()->getLocale();
    if ($lang == 'ar' || $lang == 'he') {
        $settings['SITE_RTL'] = 'on';
    }
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,  initial-scale=1.0, user-scalable=0, minimal-ui" />
    <meta name="description" content="Dashboard Template Description" />
    <meta name="keywords" content="Dashboard Template" />
    <meta name="author" content="WorkDo" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GJPCC7P8X1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-GJPCC7P8X1');
    </script>
    <title>
        @yield('page-title') - {{ config('app.name', 'Support Ticket') }}
    </title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ $logos . 'favicon.png' }}">

    <link rel="stylesheet" href="{{ asset('assets/fonts/tabler-icons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/fonts/feather.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/fonts/fontawesome.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/fonts/material.css') }}">
    <style>
        :root {
            --color-customColor: <?= $color ?>;
        }
        :root {
            --support-svg-clr: <?= $color ?>;
        }
    </style>
    <!-- vendor css -->

    <link rel="stylesheet" href="{{ asset('css/custom-color.css') }}">


    @if ($settings['cust_darklayout'] == 'on')
        @if (app()->getLocale() == 'ar')
            
            <link rel="stylesheet" href="{{ asset('assets/css/style-rtl.css') }}" id="main-style-link">
        @endif
        <link rel="stylesheet" href="{{ asset('assets/css/style-dark.css') }}">
    @else
        @if (app()->getLocale() == 'ar')
            <link rel="stylesheet" href="{{ asset('assets/css/style-rtl.css') }}" id="main-style-link">
        @else
            <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" id="main-style-link">
        @endif
    @endif


    @if (app()->getLocale() == 'ar')
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('assets/css/custom-auth-rtl.css') }}" id="main-style-link">
        <style>
                body, p, h1, h2, h3, h4, h5, span, h6, a, p, th, td, tr, button {
                    font-family: "Almarai", sans-serif !important;
                }
                .almarai-light {
                font-family: "Almarai", sans-serif;
                font-weight: 300;
                font-style: normal;
                }

                .almarai-regular {
                font-family: "Almarai", sans-serif;
                font-weight: 400;
                font-style: normal;
                }

                .almarai-bold {
                font-family: "Almarai", sans-serif;
                font-weight: 700;
                font-style: normal;
                }

                .almarai-extrabold {
                font-family: "Almarai", sans-serif;
                font-weight: 800;
                font-style: normal;
                }

            </style>
        @else
        <link rel="stylesheet" href="{{ asset('assets/css/custom-auth.css') }}" id="main-style-link">
    @endif
    @if ($settings['cust_darklayout'] == 'on')
        <link rel="stylesheet" href="{{ asset('assets/css/custom-dark.css') }}" id="main-style-link">
    @endif

    @if ($settings['cust_darklayout'] == 'on')
        <link rel="stylesheet" href="{{ asset('assets/css/custom-dark.css') }}" id="main-style-link">
        <link rel="stylesheet" href="{{ asset('assets/css/style-dark.css') }}">
        <script>  document.addEventListener('DOMContentLoaded', (event) => {
            const recaptcha = document.querySelector('.g-recaptcha');
            recaptcha.setAttribute("data-theme", "dark");
          });
        </script>
    @endif


    <!---->


    @stack('css-page')

    <link rel="stylesheet" href="{{ asset('assets/css/customizer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">

    <style type="text/css">
        img.navbar-brand-img {
            width: 245px;
            height: 61px;
        }
    </style>
</head>




<body class="{{  $themeColor }} ticket-page-sec">

    @yield('content')

    <!-- Required Js -->
    <script src="{{ asset('assets/js/vendor-all.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/feather.min.js') }}"></script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/custom.js') }}"></script>
    <script src="https://js.pusher.com/5.0/pusher.min.js"></script>


    <script>
        feather.replace();
        var pctoggle = document.querySelector("#pct-toggler");
        if (pctoggle) {
            pctoggle.addEventListener("click", function() {
                if (
                    !document.querySelector(".pct-customizer").classList.contains("active")
                ) {
                    document.querySelector(".pct-customizer").classList.add("active");
                } else {
                    document.querySelector(".pct-customizer").classList.remove("active");
                }
            });
        }
        var themescolors = document.querySelectorAll(".themes-color > a");
        for (var h = 0; h < themescolors.length; h++) {
            var c = themescolors[h];

            c.addEventListener("click", function(event) {
                var targetElement = event.target;
                if (targetElement.tagName == "SPAN") {
                    targetElement = targetElement.parentNode;
                }
                var temp = targetElement.getAttribute("data-value");
                removeClassByPrefix(document.querySelector("body"), "theme-");
                document.querySelector("body").classList.add(temp);
            });
        }

        function removeClassByPrefix(node, prefix) {
            for (let i = 0; i < node.classList.length; i++) {
                let value = node.classList[i];
                if (value.startsWith(prefix)) {
                    node.classList.remove(value);
                }
            }
        }
    </script>


<script>
    function show_toastr(title, message, type) {

        var f = document.getElementById('liveToast');
        var a = new bootstrap.Toast(f).show();

        if (type == 'success') {
            $('#liveToast').addClass('bg-primary');
        } else {
            $('#liveToast').addClass('bg-danger');
        }
        $('#liveToast .toast-body').html(message);
    }
</script>



    @stack('scripts')

    {{-- Toaster Checker --}}
    @if ($message = Session::get('success'))
        <script>
            show_toastr('Success', '{!! $message !!}', 'success');
        </script>
    @endif
    @if ($message = Session::get('error'))
        <script>
            show_toastr('Error', '{!! $message !!}', 'error');
        </script>
    @endif

</body>
@include('layouts.cookie_consent')

</html>
