module AdminApp {
    export class HomeController {
        public authService: AuthService;

        constructor(authService: AuthService) {
            this.authService = authService;
        }
    }
}