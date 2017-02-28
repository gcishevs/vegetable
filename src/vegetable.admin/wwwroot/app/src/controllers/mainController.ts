/// <reference path="../_all.ts" />
module AdminApp {
    export class MainController {
        static $inject = ['$mdSidenav', 'holderService'];

        menuItems: MenuItem[] = [];
        selectedMenuItem: MenuItem = null;
        isHolderLoaded: boolean = false;

        constructor(
            private $mdSidenav: ng.material.MDSidenavService, private holderService: IHolderService) {
            this.menuItems = [
                { name: 'name', displayName: 'Home', url: '#!' },
                { name: 'personalInfo', displayName: 'Personal Info', url: '#!personalInfo' }
            ];
            this.selectedMenuItem = this.menuItems[0];
            this.loadHolder();

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

        loadHolder(): void {
            this.holderService.GetCurrentHolder()
                .then((success) => {
                    this.isHolderLoaded = true;
                })
        }
        
    }
}