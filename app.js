const app = Vue.createApp({
    data() {
        return {
            newTask: { task: '', date: '' }, // Object to store task and date
            tasks: [],
            selectedTasks: [],// Array to store selected task indices

            newUser: {
                username: '',
                email: '',
                password: ''
            },
            registeredUsers: [] // Array to store registered users
        };
    },
    methods: {
        addTask() {
            if (this.newTask.task) {
                this.tasks.push({ task: this.newTask.task, date: this.newTask.date });
                this.newTask = { task: '', date: '' }; // Reset the input fields
            }
        },
        deleteSelected() {
            // Delete selected tasks in reverse order to avoid index issues
            for (let i = this.selectedTasks.length - 1; i >= 0; i--) {
                this.tasks.splice(this.selectedTasks[i], 1);
            }
            this.selectedTasks = []; // Clear selected tasks
        },
        
        registerUser() {
            if (this.newUser.username && this.newUser.email && this.newUser.password) {
                this.registeredUsers.push({
                    username: this.newUser.username,
                    email: this.newUser.email,
                    password: this.newUser.password
                });

                this.newUser = {
                    username: '',
                    email: '',
                    password: ''
                };

                console.log("User resgistered successfully");
            } else {
                console.log("Please fill in all fields");

            }


        
        }   

                

    }
});

app.mount('#app');