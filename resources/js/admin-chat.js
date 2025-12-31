class AdminChat {
    constructor() {
        this.currentUserId = null;
        this.pusher = null;
        this.setupEventListeners();
        this.initializePusher();
    }

    setupEventListeners() {
        // User selection
        document.querySelectorAll('.user-list-item').forEach(item => {
            item.addEventListener('click', this.selectUser.bind(this));
        });

        // Send message
        document.getElementById('adminMessageInput').addEventListener('keypress', this.handleAdminMessageSend.bind(this));
    }

    async selectUser(e) {
        const userId = e.currentTarget.dataset.userId;
        this.currentUserId = userId;
        
        // Highlight selected user
        document.querySelectorAll('.user-list-item').forEach(item => {
            item.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        
        // Load messages
        await this.loadMessages(userId);
    }

    async loadMessages(userId) {
        try {
            const response = await axios.get(route('chat.get.message', { user_id: userId }));
            
            document.getElementById('messageContainer').innerHTML = response.data.messagehtml;
            document.getElementById('deleteButtonContainer').innerHTML = response.data.deletehtml;
            
            // Scroll to bottom
            const container = document.getElementById('messageContainer');
            container.scrollTop = container.scrollHeight;
        } catch (error) {
            console.error('Error loading messages:', error);
        }
    }

    async handleAdminMessageSend(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            
            const messageInput = e.target;
            const message = messageInput.value.trim();
            
            if (message && this.currentUserId) {
                try {
                    await axios.post(route('chat.send'), {
                        receiver_id: this.currentUserId,
                        message: message
                    });
                    
                    messageInput.value = '';
                    this.loadMessages(this.currentUserId);
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
        
        channel.bind('new-message', async (data) => {
            if (data.from !== 0 && (this.currentUserId === null || this.currentUserId === data.from)) {
                if (this.currentUserId === null) {
                    // Refresh user list if new message from a user not currently selected
                    window.location.reload();
                } else {
                    await this.loadMessages(this.currentUserId);
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('adminChatContainer')) {
        new AdminChat();
    }
});