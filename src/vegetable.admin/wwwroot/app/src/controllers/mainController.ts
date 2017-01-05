/// <reference path="../_all.ts" />
module AdminApp {
    export class MainController {
        static $inject = ['$mdSidenav'];

        constructor(
            private $mdSidenav: ng.material.MDSidenavService) {
        }

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

    }
}