/// <reference path="../_all.ts" />
module AdminApp {
    export class BasePersonalInfoController {
        info: BasePersonalInfo = null;
        availableTabs: string[] = null;
        holder: BasePersonalInfo;
        searchTagText: string = '';

        static $inject = ['dataToolsService'];

        constructor(private dataToolsService: IDataToolsService) {
            this.dataToolsService.GetAvailableTags((data) => {
                this.availableTabs = data;
            });
        }

        
       
    }
}