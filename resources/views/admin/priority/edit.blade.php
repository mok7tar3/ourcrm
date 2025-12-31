
<form method="post" class="needs-validation" novalidate action="{{ route('admin.priority.update', $priority->id) }}">
    @csrf
    @method('PUT')
    <div class="row">
        <div class="form-group col-md-6">
            <label class="form-label">{{ __('Title Ar') }}</label><x-required></x-required>
            <div class="col-sm-12 col-md-12">
                <input type="text" placeholder="{{ __('Title Ar of the Category') }}" name="title_ar"
                    class="form-control {{ $errors->has('title_ar') ? ' is-invalid' : '' }}" required value="{{ $priority->title_ar }}"
                    autofocus>
                <div class="invalid-feedback">
                    {{ $errors->first('title_ar') }}
                </div>
            </div>
        </div>

        <div class="form-group col-md-6">
            <label class="form-label">{{ __('Title En') }}</label><x-required></x-required>
            <div class="col-sm-12 col-md-12">
                <input type="text" placeholder="{{ __('Title En of the Category') }}" name="title_en"
                    class="form-control {{ $errors->has('title_en') ? ' is-invalid' : '' }}" required value="{{ $priority->title_en }}"
                    autofocus>
                <div class="invalid-feedback">
                    {{ $errors->first('title_en') }}
                </div>
            </div>
        </div>

        <div class="form-group col-md-6">
            <label for="exampleColorInput" class="form-label">{{ __('Color') }}</label>
            <div class="col-sm-12 col-md-12">
                <input name="color" type="color"
                    class="form-control form-control-color {{ $errors->has('color') ? ' is-invalid' : '' }}"
                    value="{{ $priority->color }}">
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
                <button class="btn btn-primary btn-block btn-submit"><span>{{ __('Update') }}</span></button>
            </div>
        </div>
    </div>
</form>
