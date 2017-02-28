module AdminApp {
    //import Auth0Lock from 'auth0-lock';

    export class AuthService {

        lock: any;
        authManager: any;

        constructor(lock, authManager) {
            //this.lock = new Auth0Lock('x1T1ThQDjZdKxc1YU6PBUMdSgFV01wHk', 'vegetables.eu.auth0.com');
            this.lock = lock;
            this.authManager = authManager;
        }

        public Login(): void {
            this.lock.show();
        }

        public LogOut(): void {
            localStorage.removeItem('id_token');
            this.authManager.unauthenticate();
        }

        public RegisterAuthenticationListener(): void {
            const self = this;

            this.lock.on('authenticated', function (authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                self.authManager.authenticate();
            });
        }
    }
}