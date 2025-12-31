<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KSU Ticketing System</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('template/styles.css')}}">
    @if (app()->getLocale() == 'ar') 
	<style>
		body, h2, h3, input, placeholder, h1, h4, h5, p, div, span, button, a {
			font-family: 'IBM Plex Sans Arabic', 'Inter' !important;
			
		}
        .content {
            text-align: start; /* auto switches left/right */
        }
	</style>
	@endif
    <script>
        window.App = {
            locale: '{{ app()->getLocale() }}',
            csrfToken: '{{ csrf_token() }}',
            isRTL: {{ app()->getLocale() == 'ar' ? 'true' : 'false' }},
            baseUrl: '{{ url("/") }}',
            currentRoute: '{{ Route::currentRouteName() }}'
        };
    </script>
</head>
<body>
    
    <!-- Background Gradient -->
    <div class="gradient-background"></div>
    
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm" id="mainNavbar">
        <div class="container-xl px-4">
            <a class="navbar-brand d-flex align-items-center" href="#home">
                <img src="{{ asset('template/assets/images/logo.png')}}" alt="KSU Logo" height="56" class="d-inline-block align-text-top">
            </a>
            
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-3">
                    <li class="nav-item">
                        <a class="nav-link fw-medium" href="#home">{{trans('Home')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-medium" href="#search">{{trans('Search Ticket')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-medium" href="#faq">{{trans('FAQ')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-medium" href="#about">{{trans('About Us')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-medium" href="#knowledge">{{trans('Knowledge')}}</a>
                    </li>
                    @if (app()->getLocale() == 'ar')
                    <li class="nav-item">
                        <button class="btn btn-sm btn-outline-primary rounded-pill px-3" id="languageToggle">
                            <a style="text-decoration: none" href="{{route('locale', ['locale' => 'en'])}}"><span data-i18n="nav.language">English</span></a>
                        </button>
                    </li>
                    @else
                    <li class="nav-item">
                        <button class="btn btn-sm btn-outline-primary rounded-pill px-3" id="languageToggle">
                            <a style="font-family: 'Noto Kufi Arabic', sans-serif !important; text-decoration: none" href="{{route('locale', ['locale' => 'ar'])}}"><span data-i18n="nav.language">العربية</span></a>
                        </button>
                    </li>
                    @endif
                    <li class="nav-item">
                        <a href="{{route('ssologin')}}" class="btn btn-primary rounded-pill px-4" data-i18n="nav.login">{{trans('Login')}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section py-5">
        <div class="container-xl px-4">
            <div class="row align-items-center min-vh-section gy-5">
                <div class="col-lg-6 order-2 order-lg-1">
                    <div class="hero-content">
                        <!-- Headline with Typewriter Effect -->
                        <h1 class="hero-title mb-3">
                            <span id="heroText"></span>
                            <span id="heroCursor" class="cursor">|</span>
                        </h1>
                        
                        <!-- Underline SVG -->
                        <div class="hero-underline mb-4" id="heroUnderline">
                            <svg width="100%" height="34" viewBox="0 0 487 34" fill="none" preserveAspectRatio="none">
                                <path d="M4.00102 30C73.6317 10.3798 266.915 -17.0885 483.001 30" stroke="#008DC3" stroke-width="8" stroke-linecap="round"/>
                            </svg>
                        </div>
                        
                        <!-- Description -->
                        <p dir="auto" class="content hero-description text-muted mb-4" id="heroDescription" data-i18n="hero.description">
                            {{ trans('The Beneficiary Support Service is a dedicated channel for receiving inquiries and feedback from KSU members about transformation programs and initiatives')}}
                        </p>
                        
                        <!-- CTA Buttons -->
                        <div class="d-flex flex-column flex-sm-row gap-3 hero-buttons">
                            <button class="btn btn-primary btn-lg rounded-pill px-4 cta-button" id="heroButton1" data-i18n="hero.createTicket">
                                {{ trans('Create A Ticket')}}
                            </button>
                            <button class="btn btn-outline-secondary btn-lg rounded-pill px-4 d-flex align-items-center justify-content-center gap-2" id="heroButton2">
                                <i class="bi bi-search"></i>
                                <span data-i18n="hero.searchOld">{{ trans('Search old Ticket')}}</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6 order-1 order-lg-2">
                    <div class="hero-image" id="heroImage">
                        <img src="{{ asset('template/assets/images/hero-image.png')}}" alt="Hero" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section py-5">
        <div class="container-xl px-4">
            <div class="row align-items-center gy-5">
                <div class="col-lg-6">
                    <div class="about-image fade-in" data-animation="fade-in">
                        <img src="{{ asset('template/assets/images/about-image.png')}}" alt="About KSU" class="img-fluid rounded-4">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="about-content fade-in" data-animation="fade-in">
                        <h2 class="section-title mb-4">
                            <span dir="auto" class="content">{{ trans('About')}}</span>
                            <span dir="auto" class="content text-primary">{{ trans('OUR KSU')}}</span>
                        </h2>
                        
                        <div class="about-points">
                            <div class="about-point mb-4 fade-in-delay-1" data-animation="fade-in">
                                <div class="d-flex gap-3">
                                    <div class="point-icon">
                                        <i class="bi bi-check-circle-fill text-primary fs-4"></i>
                                    </div>
                                    <p class="text-muted mb-0" data-i18n="about.point1">
                                        The Beneficiary Support Service is the official communication channel supervised by King Saud University.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="about-point mb-4 fade-in-delay-2" data-animation="fade-in">
                                <div class="d-flex gap-3">
                                    <div class="point-icon">
                                        <i class="bi bi-check-circle-fill text-primary fs-4"></i>
                                    </div>
                                    <p class="text-muted mb-0" data-i18n="about.point2">
                                        It provides a unified and reliable way for KSU members to submit inquiries, report issues, and share feedback.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="about-point mb-4 fade-in-delay-3" data-animation="fade-in">
                                <div class="d-flex gap-3">
                                    <div class="point-icon">
                                        <i class="bi bi-check-circle-fill text-primary fs-4"></i>
                                    </div>
                                    <p class="text-muted mb-0" data-i18n="about.point3">
                                        Our goal is to enhance communication, ensure timely support, and improve the overall service experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <button class="btn btn-link text-primary p-0 text-decoration-none fw-medium fade-in-delay-4" data-animation="fade-in" data-i18n="about.learnMore">
                            Learn more..
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="how-it-works-section py-5">
        <div class="container-xl px-4">
            <div class="text-center mb-5 fade-in" data-animation="fade-in">
                <h2 class="section-title mb-3" data-i18n="howItWorks.title">How does it work?</h2>
                <p class="text-muted" data-i18n="howItWorks.subtitle">A simple 5-step process to get your ticket resolved</p>
            </div>
            
            <div class="row g-4">
                <!-- Step 1 -->
                <div class="col-md-6 col-lg-4 fade-in-delay-1" data-animation="fade-in">
                    <div class="step-card card border-0 shadow-sm h-100">
                        <div class="card-body p-4">
                            <div class="step-number mb-3">1</div>
                            <h5 class="card-title mb-3" data-i18n="howItWorks.step1.title">Login</h5>
                            <p class="card-text text-muted" data-i18n="howItWorks.step1.desc">
                                Login via your KSU credentials to access the system
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 2 -->
                <div class="col-md-6 col-lg-4 fade-in-delay-2" data-animation="fade-in">
                    <div class="step-card card border-0 shadow-sm h-100">
                        <div class="card-body p-4">
                            <div class="step-number mb-3">2</div>
                            <h5 class="card-title mb-3" data-i18n="howItWorks.step2.title">Type your Problem</h5>
                            <p class="card-text text-muted" data-i18n="howItWorks.step2.desc">
                                Describe your issue in detail to help us understand your needs
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 3 -->
                <div class="col-md-6 col-lg-4 fade-in-delay-3" data-animation="fade-in">
                    <div class="step-card card border-0 shadow-sm h-100">
                        <div class="card-body p-4">
                            <div class="step-number mb-3">3</div>
                            <h5 class="card-title mb-3" data-i18n="howItWorks.step3.title">Choose Category</h5>
                            <p class="card-text text-muted" data-i18n="howItWorks.step3.desc">
                                Select the appropriate category for your ticket
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 4 -->
                <div class="col-md-6 col-lg-4 fade-in-delay-4" data-animation="fade-in">
                    <div class="step-card card border-0 shadow-sm h-100">
                        <div class="card-body p-4">
                            <div class="step-number mb-3">4</div>
                            <h5 class="card-title mb-3" data-i18n="howItWorks.step4.title">Track Ticket</h5>
                            <p class="card-text text-muted" data-i18n="howItWorks.step4.desc">
                                Monitor the progress of your ticket in real-time
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 5 -->
                <div class="col-md-6 col-lg-4 fade-in-delay-5" data-animation="fade-in">
                    <div class="step-card card border-0 shadow-sm h-100">
                        <div class="card-body p-4">
                            <div class="step-number mb-3">5</div>
                            <h5 class="card-title mb-3" data-i18n="howItWorks.step5.title">Problem Solved</h5>
                            <p class="card-text text-muted" data-i18n="howItWorks.step5.desc">
                                Get your issue resolved efficiently
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Statistics Section -->
    <section id="statistics" class="statistics-section py-5">
        <div class="container-xl px-4">
            <div class="row align-items-center gy-5">
                <div class="col-lg-6">
                    <div class="stats-image fade-in" data-animation="fade-in">
                        <img src="{{ asset('template/assets/images/stats-image.png')}}" alt="Statistics" class="img-fluid rounded-4">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="row g-4">
                        <!-- Stat 1 -->
                        <div class="col-sm-6 fade-in-delay-1" data-animation="fade-in">
                            <div class="stat-card card border-0 shadow-sm h-100">
                                <div class="card-body p-4 text-center">
                                    <div class="stat-number text-primary mb-2" data-counter="1250">0</div>
                                    <p class="stat-label text-muted mb-0" data-i18n="stats.tickets">
                                        Tickets successfully resolved
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stat 2 -->
                        <div class="col-sm-6 fade-in-delay-2" data-animation="fade-in">
                            <div class="stat-card card border-0 shadow-sm h-100">
                                <div class="card-body p-4 text-center">
                                    <div class="stat-number text-primary mb-2" data-counter="850">0</div>
                                    <p class="stat-label text-muted mb-0" data-i18n="stats.users">
                                        Happy and supported users
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stat 3 -->
                        <div class="col-sm-6 fade-in-delay-3" data-animation="fade-in">
                            <div class="stat-card card border-0 shadow-sm h-100">
                                <div class="card-body p-4 text-center">
                                    <div class="stat-number text-primary mb-2" data-counter="3500">0</div>
                                    <p class="stat-label text-muted mb-0" data-i18n="stats.messages">
                                        Messages handled through the system
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stat 4 -->
                        <div class="col-sm-6 fade-in-delay-4" data-animation="fade-in">
                            <div class="stat-card card border-0 shadow-sm h-100">
                                <div class="card-body p-4 text-center">
                                    <div class="stat-number text-primary mb-2" data-counter="980">0</div>
                                    <p class="stat-label text-muted mb-0" data-i18n="stats.tracked">
                                        Successfully Tracked Tickets
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq-section py-5">
        <div class="container-xl px-4">
            <div class="text-center mb-5 fade-in" data-animation="fade-in">
                <h2 class="section-title">{{trans('Frequently Asked Questions')}}</h2>
            </div>
            
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="accordion fade-in" id="faqAccordion" data-animation="fade-in">
                        <!-- FAQ 1 -->
                         @foreach ($faqs as $index => $faq)
                        <div id="{{ $index }}" class="accordion-item border-0 mb-3 shadow-sm">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq{{ $index }}">
                                    <span>{{$faq->title}}</span>
                                </button>
                            </h2>
                            <div id="faq{{ $index }}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body text-muted">
                                    {!! $faq->description !!}
                                </div>
                            </div>
                        </div>
                        @endforeach
                        
                        <!-- FAQ 2 -->
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Ready Section (CTA) -->
    <section id="ready" class="ready-section py-5 bg-light">
        <div class="container-xl px-4">
            <div class="text-center fade-in" data-animation="fade-in">
                <h2 class="section-title mb-3" data-i18n="ready.title">Are you ready?</h2>
                <p class="text-muted mb-4 fs-5" data-i18n="ready.description">Let's help you get your problem solved</p>
                <button class="btn btn-primary btn-lg rounded-pill px-5" data-i18n="ready.getStarted">Get Started</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-dark text-light py-5">
        <div class="container-xl px-4">
            <div class="row g-4">
                <!-- Logo & Description -->
                <div class="col-lg-4">
                    <img src="{{ asset('template/assets/images/logo.png')}}" alt="KSU Logo" height="56" class="mb-3" style="filter: brightness(0) invert(1);">
                    <p class="text-light-50" data-i18n="footer.description">
                        The Beneficiary Support Service is a dedicated channel for receiving inquiries and feedback from KSU members.
                    </p>
                </div>
                
                <!-- Quick Links -->
                <div class="col-lg-2 col-md-4">
                    <h6 class="fw-bold mb-3" data-i18n="footer.quickLinks">Quick Links</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#home" class="text-light-50 text-decoration-none" data-i18n="footer.home">Home</a></li>
                        <li class="mb-2"><a href="#about" class="text-light-50 text-decoration-none" data-i18n="footer.about">About Us</a></li>
                        <li class="mb-2"><a href="#faq" class="text-light-50 text-decoration-none" data-i18n="footer.faq">FAQ</a></li>
                        <li class="mb-2"><a href="#contact" class="text-light-50 text-decoration-none" data-i18n="footer.contact">Contact</a></li>
                    </ul>
                </div>
                
                <!-- Support -->
                <div class="col-lg-2 col-md-4">
                    <h6 class="fw-bold mb-3" data-i18n="footer.support">Support</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-light-50 text-decoration-none" data-i18n="footer.help">Help Center</a></li>
                        <li class="mb-2"><a href="#" class="text-light-50 text-decoration-none" data-i18n="footer.documentation">Documentation</a></li>
                        <li class="mb-2"><a href="#" class="text-light-50 text-decoration-none" data-i18n="footer.community">Community</a></li>
                    </ul>
                </div>
                
                <!-- Legal -->
                <div class="col-lg-2 col-md-4">
                    <h6 class="fw-bold mb-3" data-i18n="footer.legal">Legal</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-light-50 text-decoration-none" data-i18n="footer.privacy">Privacy Policy</a></li>
                        <li class="mb-2"><a href="#" class="text-light-50 text-decoration-none" data-i18n="footer.terms">Terms of Service</a></li>
                        <li class="mb-2"><a href="#" class="text-light-50 text-decoration-none" data-i18n="footer.cookies">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <hr class="my-4 border-secondary">
            
            <div class="text-center text-light-50">
                <p class="mb-0" data-i18n="footer.rights">© 2025 KSU. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Bootstrap 5 JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom JavaScript -->
    <script src="{{ asset('template/script.js')}}"></script>
</body>
</html>
