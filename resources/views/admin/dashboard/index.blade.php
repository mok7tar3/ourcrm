@extends('layouts.admin')

@section('page-title')
    {{ __('Dashboard') }}
@endsection

@section('breadcrumb')
    <li class="breadcrumb-item">{{ __('Home') }}</li>
@endsection

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="row">
                        <!-- <div class="col-lg-2 col-6">
                            <div class="card">
                                <div class="card-body dash_card_height">
                                    <div class="theme-avtar bg-primary badge">
                                        <i class="fas fa-link"></i>
                                    </div>
                                    <p class="text-muted text-md mt-4 mb-2">{{ __('Did you know that you can quickly Create your Ticket by using this link.') }}</p>
                                    <div class="col-md-10 stats text-muted text-sm mt-4">
                                        @if (\Auth::user()->parent == 0)
                                        <a href="#" class="btn py-2 px-2 btn-sm btn-primary btn-icon cp_link"
                                            data-link="{{ url(\Auth::user()->slug . '/') }}" data-toggle="tooltip"
                                            data-original-title="{{ __('Click To Copy Support Ticket Url') }}"
                                            title="{{ __('Click To Copy Support Ticket Url') }}" data-bs-toggle="tooltip"
                                            data-bs-placement="top">
                                            <i class="ti ti-copy"></i>
                                            {{ __('Create Ticket') }}
                                        </a>
                                    @endif
                                    </div>

                                </div>
                            </div>

                        </div> -->
                        @if (auth()->user()->role == 'Admin')
                        <div class="col-lg-2 col-6">
                            <div class="card">
                                <div class="card-body dash_card_height">
                                    <div class="theme-avtar bg-secondary badge">
                                        <i class="fas fa-list-alt"></i>
                                    </div>
                                    <p class="text-muted text-sm mt-4 mb-2">{{ __('Total') }}</p>
                                    <h6 class="mb-3">{{ __('Categories') }}</h6>
                                    <h3 class="mb-0">{{ $categories }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6">
                            <div class="card">
                                <div class="card-body dash_card_height">
                                    <div class="theme-avtar bg-blue-subtitle badge">
                                        <i class="fas fa-list"></i>
                                    </div>
                                    <p class="text-muted text-sm mt-4 mb-2">{{ __('Total') }}</p>
                                    <h6 class="mb-3">{{ __('Sub Categories') }}</h6>
                                    <h3 class="mb-0">{{ $subcategories }}</h3>
                                </div>
                            </div>
                        </div>
                        @endif
                        <div class="col-lg-2 col-6">
                            <div class="card">
                                <div class="card-body dash_card_height">
                                    <div class="theme-avtar bg-info badge">
                                        <i class="fas fa-ticket-alt"></i>
                                    </div>
                                    <p class="text-muted text-sm mt-4 mb-2">{{ __('Open') }}</p>
                                    <h6 class="mb-3">{{ __('Tickets') }}</h6>
                                    @if (auth()->user()->role == 'User' || auth()->user()->role == 'Dean')
                                    <h3 class="mb-0">{{ $agent_open_ticket }} </h3>
                                    @else
                                    <h3 class="mb-0">{{ $open_ticket }} </h3>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6">
                            <div class="card">
                                <div class="card-body dash_card_height">
                                    <div class="theme-avtar bg-warning badge">
                                        <i class="fas fa-ticket-alt"></i>
                                    </div>
                                    <p class="text-muted text-sm mt-4 mb-2">{{ __('Closed') }}</p>
                                    <h6 class="mb-3">{{ __('Tickets') }}</h6>
                                    @if (auth()->user()->role == 'User' || auth()->user()->role == 'Dean')
                                    <h3 class="mb-0">{{ $agent_close_ticket }} </h3>
                                    @else
                                    <h3 class="mb-0">{{ $close_ticket }} </h3>
                                    @endif
                                </div>
                            </div>
                        </div>
                        @if (auth()->user()->role == 'Admin')
                        <div class="col-lg-2 col-6">
                            <div class="card">
                                <div class="card-body dash_card_height">
                                    <div class="theme-avtar bg-danger badge">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <p class="text-muted text-sm mt-4 mb-2">{{ __('Total') }}</p>
                                    <h6 class="mb-3">{{ __('Users') }}</h6>
                                    <h3 class="mb-0">{{ $agents }}</h3>
                                </div>
                            </div>
                        </div>
                        @endif
                    </div>
                </div>

            </div>

            {{-- ------------------------------------------------------------------------------------------------------------------------ --}}
            <div class="row d-flex">
                <div class="col-xxl-4">
                    <div class="card">
                        <div class="card-header">
                            <h5>{{ __('Tickets by Category') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <div id="categoryPie"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-4">
                    <div class="card">
                        <div class="card-header">
                            <h5>{{ __('Tickets by Status') }}</h5>
                        </div>
                        <div class="card-body">
                            <div id="statusPie"></div>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-4">
                    <div class="card">
                        <div class="card-header">
                            <h5>{{ __('Tickets by Priority') }}</h5>
                        </div>
                        <div class="card-body">
                            <div id="priorityPie"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-xxl-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>{{ __('This Year Tickets') }}</h5>
                        </div>
                        <div class="card-body">
                            <div id="chartBar"></div>
                        </div>
                    </div>
                </div>
            </div>

            @if (auth()->user()->role == 'Admin')
            <div class="container py-5">
                <h3 class="fw-bold mb-4 text-center text-primary">
                    <i class="bi bi-bar-chart-fill me-2"></i> {{ __('Ticket Review Insights') }}
                </h3>

                <div class="ticket-stats-container">
                    <!-- ⭐ Good Reviews -->
                    <div class="ticket-card">
                        <div class="ticket-icon good shadow">
                            <i class="bi bi-star-half"></i>
                        </div>
                        <h5 class="text-warning">{{ __('Good Reviews (> 3)') }}</h5>
                        <h2>{{ $stats['good_reviews'] }}</h2>
                    </div>

                    <!-- 🌟 Perfect Reviews -->
                    <div class="ticket-card">
                        <div class="ticket-icon perfect shadow">
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <h5 class="text-success">{{ __('Perfect Reviews (5)') }}</h5>
                        <h2>{{ $stats['perfect_reviews'] }}</h2>
                    </div>

                    <!-- ❌ Not Reviewed -->
                    <div class="ticket-card">
                        <div class="ticket-icon none shadow">
                            <i class="bi bi-dash-circle"></i>
                        </div>
                        <h5 class="text-secondary">{{ __('Not Reviewed') }}</h5>
                        <h2>{{ $stats['no_reviews'] }}</h2>
                    </div>

                    <!-- ⚠️ Low Reviews -->
                    <div class="ticket-card">
                        <div class="ticket-icon low shadow">
                            <i class="bi bi-exclamation-triangle"></i>
                        </div>
                        <h5 class="text-danger">{{ __('Low Reviews (< 3)') }}</h5>
                        <h2>{{ $stats['low_reviews'] }}</h2>
                    </div>
                </div>
            </div>
            @endif
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{ asset('assets/js/plugins/apexcharts.min.js') }}"></script>
    <script>
        $('.cp_link').on('click', function() {
            var value = $(this).attr('data-link');
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(value).select();
            document.execCommand("copy");
            $temp.remove();
            show_toastr('Success', '{{ __('Link Copy on Clipboard') }}', 'success')
        });
    </script>
    <script>
        (function() {
            var chartBarOptions = {
                series: [{
                    name: '{{ __('Tickets') }}',
                    // data: [40, 20, 60, 15, 50, 65, 20, 40, 20, 60, 15, 50]
                    data: {!! json_encode(array_values($monthData)) !!}
                }, ],

                chart: {
                    height: 150,
                    type: 'area',
                    // type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2,
                    curve: 'smooth'
                },
                title: {
                    text: '',
                    align: 'left'
                },
                xaxis: {
                    categories: {!! json_encode(array_keys($monthData)) !!},
                    title: {
                        text: '{{ __('Months') }}'
                    }
                },
                colors: ['#ffa21d', '#FF3A6E'],

                grid: {
                    strokeDashArray: 4,
                },
                legend: {
                    show: false,
                },
                markers: {
                    size: 4,
                    colors: ['#ffa21d', '#FF3A6E'],
                    opacity: 0.9,
                    strokeWidth: 2,
                    hover: {
                        size: 7,
                    }
                },
                yaxis: {
                    title: {
                        text: '{{ __('Tickets') }}'
                    },
                    tickAmount: 3,
                    min: 10,
                    max: 70,
                }
            };
            var arChart = new ApexCharts(document.querySelector("#chartBar"), chartBarOptions);
            arChart.render();
        })();
        (function() {
            var categoryPieOptions = {
                chart: {
                    height: 140,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '70%',
                        }
                    }
                },
                series: {!! json_encode($chartData['value']) !!},
                colors: {!! json_encode($chartData['color']) !!},
                labels: {!! json_encode($chartData['title']) !!},
                legend: {
                    show: true
                }
            };
            var categoryPieChart = new ApexCharts(document.querySelector("#categoryPie"), categoryPieOptions);
            categoryPieChart.render();
        })();

        (function() {
            var statusPieOptions = {
                chart: {
                    height: 140,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '70%',
                        }
                    }
                },
                series: {!! json_encode($statusData['value']) !!},
                labels: {!! json_encode($statusData['name']) !!},
                legend: {
                    show: true
                },
                // colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A8']
            };
            var statusPieChart = new ApexCharts(document.querySelector("#statusPie"), statusPieOptions);
            statusPieChart.render();
        })();


        (function() {
            var priorityPieOptions = {
                chart: {
                    height: 140,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '70%',
                        }
                    }
                },
                series: {!! json_encode($priorityData['value']) !!},
                labels: {!! json_encode($priorityData['name']) !!},
                // colors: ['#FF5733', '#FFC300', '#DAF7A6', '#C70039'],
                legend: {
                    show: true
                }
            };
            var priorityPieChart = new ApexCharts(document.querySelector("#priorityPie"), priorityPieOptions);
            priorityPieChart.render();
        })();


    </script>
@endpush
