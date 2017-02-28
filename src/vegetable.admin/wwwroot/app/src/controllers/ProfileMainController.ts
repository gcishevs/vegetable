/// <reference path="../_all.ts" />
module AdminApp {
    export class ProfileMainController{
        availableTabs: any = null;
        searchTagText: string = '';
        holderMainInfo: HolderInfo = null;
        public Scope: ng.IScope;


        static $inject = ['dataToolsService', 'holderService'];

        constructor(private dataToolsService: IDataToolsService, private holderService: IHolderService) {
            this.dataToolsService.GetAvailableTags((data) => {
                this.availableTabs = data;
            });
            
        }

        submitMainInfo(holder: HolderInfo): void {
            holder.title = this.holderMainInfo.title;
            holder.description = this.holderMainInfo.description;
            holder.email = this.holderMainInfo.email;
            holder.moniker = this.holderMainInfo.moniker;
            holder.tags = this.holderMainInfo.tags;
            this.holderService.SaveHolder(holder);
        }

        initMainInfoForm(holder: HolderInfo): void {
            this.holderService.GetCurrentHolder()
                .then((success) => {
                    this.holderMainInfo = success;
                })       
        }
        
        queryTags(searchTag: string): string[] {
            var results: string[];
            let allTags: string[] = this.availableTabs.data;

            if (!searchTag) {
                results = allTags.slice(0, 5);
            }
            else if (/^-$/.test(searchTag)) {
                results = allTags;
            } else {
                searchTag = searchTag.toLowerCase();
                results = allTags.filter((val) => {
                    return val.toLowerCase().indexOf(searchTag) === 0;
                });
            }

            return results;
        }

    }
}