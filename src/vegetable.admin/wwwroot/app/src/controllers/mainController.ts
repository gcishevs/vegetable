/// <reference path="../_all.ts" />
module AdminApp {
    export class MainController {
        static $inject = ['$mdSidenav'];

        menuItems: MenuItem[] = [];
        selectedMenuItem: MenuItem = null;

        constructor(
            private $mdSidenav: ng.material.MDSidenavService) {
            this.menuItems = [
                { name: 'name', displayName: 'Home', url: '#!' },
                { name: 'personalInfo', displayName: 'Personal Info', url: '#!personalInfo' }
            ];
            this.selectedMenuItem = this.menuItems[0];
        }

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectMenuItem(item: MenuItem): void {
            this.selectedMenuItem = item; 
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        }
        
    }
}