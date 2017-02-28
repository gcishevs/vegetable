var AdminApp;
(function (AdminApp) {
    //import Auth0Lock from 'auth0-lock';
    var AuthService = (function () {
        function AuthService(lock, authManager) {
            //this.lock = new Auth0Lock('x1T1ThQDjZdKxc1YU6PBUMdSgFV01wHk', 'vegetables.eu.auth0.com');
            this.lock = lock;
            this.authManager = authManager;
        }
        AuthService.prototype.Login = function () {
            this.lock.show();
        };
        AuthService.prototype.LogOut = function () {
            localStorage.removeItem('id_token');
            this.authManager.unauthenticate();
        };
        AuthService.prototype.RegisterAuthenticationListener = function () {
            var self = this;
            this.lock.on('authenticated', function (authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                self.authManager.authenticate();
            });
        };
        return AuthService;
    }());
    AdminApp.AuthService = AuthService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=authService.js.map