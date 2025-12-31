@extends('layouts.admin')

@section('page-title')
    {{ __('Create Knowledge Category') }}
@endsection

@section('breadcrumb')
    <li class="breadcrumb-item"><a href="{{ route('home') }}">{{ __('Home') }}</a></li>
    <li class="breadcrumb-item"><a href="{{ route('admin.knowledge') }}">{{ __('Knowledge') }}</a></li>
    <li class="breadcrumb-item"><a href="{{ route('admin.knowledgecategory') }}">{{ __('Category') }}</a>
    </li>
    <li class="breadcrumb-item">{{ __('Create') }}</li>
@endsection


@php
$setting = App\Models\Utility::settings()
@endphp


@section('content')
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                        @if (isset($setting['is_enabled']) && $setting['is_enabled'] == 'on')
                        <div class="float-end" style="margin-top: 18px;">
                            <a class="btn btn-primary btn-sm float-end ms-2" href="#" data-size="lg" data-ajax-popup-over="true" data-url="{{ route('generate',['knowledge_category']) }}" data-bs-toggle="tooltip" data-bs-placement="top" title="{{ __('Generate') }}" data-title="{{ __('Generate Content with AI') }}"><i class="fas fa-robot"> {{ __('Generate with AI') }}</i></a>
                        </div>
                        @endif
                    </div>
                    <form method="post" class="needs-validation" class="needs-validation" novalidate action="{{ route('admin.knowledgecategory.store') }}">
                        @csrf
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="form-label">{{ __('Title Ar') }}</label><x-required></x-required>
                                <div class="col-sm-12 col-md-12">
                                    <input type="text" placeholder="{{ __('Title Ar of the Knowledge') }}" name="title_ar"
                                        class="form-control {{ $errors->has('title_ar') ? ' is-invalid' : '' }}"
                                        value="{{ old('title_ar') }}" required autofocus>

                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="form-label">{{ __('Title En') }}</label><x-required></x-required>
                                <div class="col-sm-12 col-md-12">
                                    <input type="text" placeholder="{{ __('Title of the Knowledge') }}" name="title_en"
                                        class="form-control {{ $errors->has('title_en') ? ' is-invalid' : '' }}"
                                        value="{{ old('title_en') }}" required autofocus>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="form-label"></label>
                                <div class="col-sm-12 col-md-12 text-end">
                                    <button
                                        class="btn btn-primary btn-block btn-submit"><span>{{ __('Add') }}</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="//cdn.ckeditor.com/4.25.1/basic/ckeditor.js"></script>
    <script src="{{ asset('js/editorplaceholder.js') }}"></script>
    <script>
        CKEDITOR.replace('description', {
            // contentsLangDirection: 'rtl',
            extraPlugins: 'editorplaceholder',
            editorplaceholder: '{{ __('Start Text here..') }}'
        });
    </script>
@endpush
