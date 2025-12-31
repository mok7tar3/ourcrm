@extends('layouts.admin')

@section('page-title')
    {{ __('Messenger') }}
@endsection

@section('breadcrumb')
    <li class="breadcrumb-item"><a href="{{ route('home') }}">{{ __('Home') }}</a></li>
    <li class="breadcrumb-item">{{ __('Messenger') }}</li>
@endsection

@section('content')
<div class="row">
    <div class="col-md-4">
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <strong>{{trans('Users')}}</strong>

                <!-- Select All -->
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="select-all-users">
                    <label class="form-check-label" for="select-all-users" style="font-size: 0.9rem;">
                        {{trans('Select All')}}
                    </label>
                </div>
            </div>

            <div class="list-group list-group-flush" id="user-list">
                @foreach ($users as $user)
                    <div class="list-group-item d-flex align-items-center justify-content-between user-row">
                        
                        <!-- Checkbox -->
                        <input type="checkbox" class="form-check-input user-checkbox" value="{{ $user->id }}">

                        <!-- User button -->
                        <button class="btn btn-light border-0 flex-grow-1 text-start user-item" 
                                data-id="{{ $user->id }}" 
                                id="user-{{ $user->id }}">
                            <i class="bi bi-person me-2"></i> {{ $user->email }}
                        </button>

                    </div>
                @endforeach
            </div>

            <div class="p-3">
                <button class="btn btn-danger w-100 rounded-pill" id="delete-selected-btn" disabled>
                    <i class="bi bi-trash"></i> {{trans('Delete Selected Chats')}}
                </button>
            </div>
        </div>

        @push('css-page')
        <style>
            .user-item.active-chat {
                background-color: #e9f5ff;
                border-left: 3px solid #0d6efd;
                font-weight: 500;
            }
            .user-row { gap: 10px; }
        </style>
        @endpush
    </div>

    <!-- CHAT BOX -->
    <div class="col-md-8">
        <div class="card shadow-sm">
            <div class="card-header bg-secondary text-white">
                <strong>{{ __('Conversation') }}</strong>
            </div>

            <div class="card-body bg-light" style="height: 400px; overflow-y: auto;" id="chat-box">
                <p class="text-muted text-center">{{ __('Select a user to view messages') }}</p>
            </div>

            @push('css-page')
            <style>
                #chat-box .badge {
                    font-size: 1.1rem;
                    padding: 0.75rem 1.25rem;
                    border-radius: 1rem;
                    max-width: 80%;
                    display: inline-block;
                    word-wrap: break-word;
                }
            </style>
            @endpush

            <div class="card-footer bg-white d-flex align-items-center">
                <input type="text" id="admin-message" class="form-control me-2 rounded-pill" placeholder="{{trans('Type a message')}}">
                <button class="btn btn-primary rounded-pill" id="send-admin-message">
                    <i class="bi bi-send"></i> {{ trans('Send') }}
                </button>
            </div>
        </div>
    </div>
</div>


<!-- DELETE CONFIRMATION MODAL -->
<div class="modal fade" id="confirmDeleteModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4 shadow">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title">{{trans('Confirm Delete')}}</h5>
            </div>
            <div class="modal-body text-center">
                <p class="fs-5">{{trans('Are you sure you want to delete the selected chats?')}}</p>
            </div>
            <div class="modal-footer d-flex justify-content-between">
                <button class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">{{trans('Cancel')}}</button>
                <button class="btn btn-danger rounded-pill" id="confirm-delete-btn">
                    <i class="bi bi-trash"></i> {{trans('Yes')}}
                </button>
            </div>
        </div>
    </div>
</div>


<!-- JS -->
<script>
    let currentUserId = null;
    const chatBox = document.getElementById('chat-box');

    // -------------------------------------------------
    // USER SELECTION + ACTIVE CHAT
    // -------------------------------------------------

    document.querySelectorAll('.user-item').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.user-item').forEach(btn => btn.classList.remove('active-chat'));
            this.classList.add('active-chat');

            currentUserId = this.dataset.id;
            loadMessages();
        });
    });

    function loadMessages() {
        if (!currentUserId) return;

        fetch(`/admin/messages/${currentUserId}`)
            .then(res => res.json())
            .then(data => {
                chatBox.innerHTML = '';

                if (data.messages.length === 0) {
                    chatBox.innerHTML = '<p class="text-muted text-center">No messages found</p>';
                    return;
                }

                data.messages.reverse().forEach(msg => {
                    const wrapper = document.createElement('div');
                    wrapper.className = msg.is_admin ? 'text-end mb-3' : 'text-start mb-3';

                    const bubble = document.createElement('span');
                    bubble.className = msg.is_admin ? 'badge bg-primary' : 'badge bg-secondary';
                    bubble.textContent = msg.message;

                    wrapper.appendChild(bubble);
                    chatBox.appendChild(wrapper);
                });

                chatBox.scrollTop = chatBox.scrollHeight;
            });
    }

    setInterval(() => { if (currentUserId) loadMessages(); }, 3000);

    document.getElementById('send-admin-message').addEventListener('click', () => {
        const message = document.getElementById('admin-message').value.trim();
        if (!message || !currentUserId) return;

        fetch('/admin/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ user_id: currentUserId, message })
        }).then(() => {
            document.getElementById('admin-message').value = '';
            loadMessages();
        });
    });

    // -------------------------------------------------
    // DELETE CHECKBOX SYSTEM
    // -------------------------------------------------

    const selectAll = document.getElementById('select-all-users');
    const deleteBtn = document.getElementById('delete-selected-btn');
    const checkboxes = document.querySelectorAll('.user-checkbox');

    selectAll.addEventListener('change', function () {
        checkboxes.forEach(cb => cb.checked = selectAll.checked);
        toggleDeleteButton();
    });

    checkboxes.forEach(cb => {
        cb.addEventListener('change', toggleDeleteButton);
    });

    function toggleDeleteButton() {
        const anyChecked = [...checkboxes].some(cb => cb.checked);
        deleteBtn.disabled = !anyChecked;
    }

    // -------------------------------------------------
    // DELETE CONFIRMATION
    // -------------------------------------------------

    deleteBtn.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
        modal.show();
    });

    document.getElementById('confirm-delete-btn').addEventListener('click', () => {
        const selected = [...checkboxes].filter(cb => cb.checked).map(cb => cb.value);

        fetch("{{ route('admin.deleteChats') }}", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ user_ids: selected })
        }).then(() => {
            location.reload();
        });
    });

</script>

@endsection
