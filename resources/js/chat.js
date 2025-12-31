class FloatingChat {
    constructor() {
        this.chatUser = null;
        this.pusher = null;
        this.setupEventListeners();
        this.initializePusher();
    }

    setupEventListeners() {
        // Toggle chat window
        document.getElementById('prime').addEventListener('click', this.toggleChat.bind(this));

        // Start chat form submission
        document.getElementById('chat_frm_submit').addEventListener('click', this.startChat.bind(this));

        // Send message
        document.getElementById('chatSend').addEventListener('keypress', this.handleMessageSend.bind(this));
    }

    toggleChat() {
        const chatElement = document.querySelector('.chat');
        chatElement.classList.toggle('d-none');
    }

    async startChat() {
        const email = document.getElementById('chat_email').value;
        const emailError = document.querySelector('.e_error');

        if (!this.validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address';
            return;
        }

        emailError.textContent = '';

        try {
            const response = await axios.post(route('chat.start'), {
                email: email
            });

            if (response.data.status === 'success') {
                this.chatUser = response.data.user;
                document.cookie = `chat_user=${JSON.stringify(this.chatUser)}; path=/`;
                document.querySelector('.msg_form').classList.add('d-none');
                document.querySelector('.msg_chat').classList.remove('d-none');
                document.getElementById('chat_head').textContent = this.chatUser.email;
                
                // Load existing messages
                this.loadMessages();
            }
        } catch (error) {
            console.error('Error starting chat:', error);
            emailError.textContent = 'Error starting chat. Please try again.';
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    async loadMessages() {
        try {
            const response = await axios.get(route('chat.floating.messages'), {
                params: { user_id: this.chatUser.id }
            });
            
            const chatContainer = document.querySelector('.chat_converse');
            chatContainer.innerHTML = response.data;
            
            // Scroll to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight;
        } catch (error) {
            console.error('Error loading messages:', error);
        }
    }

    async handleMessageSend(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            
            const messageInput = e.target;
            const message = messageInput.value.trim();
            
            if (message && this.chatUser) {
                try {
                    await axios.post(route('chat.floating.send'), {
                        user_id: this.chatUser.id,
                        message: message
                    });
                    
                    messageInput.value = '';
                    this.loadMessages();
                } catch (error) {
                    console.error('Error sending message:', error);
                }
            }
        }
    }

    initializePusher() {
        const pusherAppKey = document.querySelector('meta[name="pusher-app-key"]').getAttribute('content');
        const pusherCluster = document.querySelector('meta[name="pusher-app-cluster"]').getAttribute('content');
        
        this.pusher = new Pusher(pusherAppKey, {
            cluster: pusherCluster,
            encrypted: true
        });

        const channel = this.pusher.subscribe('chat-channel');
        
        channel.bind('new-message', (data) => {
            if ((this.chatUser && data.from === 0 && data.to === this.chatUser.id) || 
                (this.chatUser && data.from === this.chatUser.id && data.to === 0)) {
                this.loadMessages();
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('prime')) {
        new FloatingChat();
    }
});