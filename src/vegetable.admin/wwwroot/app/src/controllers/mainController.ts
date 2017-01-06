/// <reference path="../_all.ts" />
module AdminApp {
    export class MainController {
        static $inject = ['$mdSidenav'];

        menuItems: string[] = [];
        selectedMenuItem: string = null;


        constructor(
            private $mdSidenav: ng.material.MDSidenavService) {
            this.menuItems = ['Home', 'Personal Info'];
            this.selectedMenuItem = this.menuItems[0];
        }

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectMenuItem(item: string): void {
            this.selectedMenuItem = item; 
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        }
        
    }
}