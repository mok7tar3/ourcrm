
<form action="{{route('admin.priority.store')}}" class="needs-validation" novalidate method="post">

    @csrf
    <div class="row">
        <div class="form-group col-md-6">
            <label class="form-label">{{ __('Title Ar') }}</label><x-required></x-required>
            <div class="col-sm-12 col-md-12">
                <input type="text" placeholder="{{ __('Title Ar of the Priority') }}" name="title_ar"
                    class="form-control {{ $errors->has('title_ar') ? ' is-invalid' : '' }}" value="{{ old('title_ar') }}"
                    required>
                <div class="invalid-feedback">
                    {{ $errors->first('title_ar') }}
                </div>
            </div>
        </div>
        <div class="form-group col-md-6">
            <label class="form-label">{{ __('Title En') }}</label><x-required></x-required>
            <div class="col-sm-12 col-md-12">
                <input type="text" placeholder="{{ __('Title En of the Priority') }}" name="title_en"
                    class="form-control {{ $errors->has('title_en') ? ' is-invalid' : '' }}" value="{{ old('title_en') }}"
                    required>
                <div class="invalid-feedback">
                    {{ $errors->first('title_en') }}
                </div>
            </div>
        </div>
        <div class="form-group col-md-6">

            <label for="exampleColorInput" class="form-label">{{ __('Color') }}</label>
            <div class="col-sm-12 col-md-12">
                <input name="color" type="color"
                    class=" form-control  form-control-color {{ $errors->has('color') ? ' is-invalid' : '' }}"
                    value="255ff7" id="exampleColorInput">
                <div class="invalid-feedback">
                    {{ $errors->first('color') }}
                </div>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="form-group col-md-12">
            <label class="form-label"></label>
            <div class="col-sm-12 col-md-12 text-end">
                <button class="btn btn-primary btn-block btn-submit"><span>{{ __('Add') }}</span></button>
            </div>
        </div>
    </div>

</form>


