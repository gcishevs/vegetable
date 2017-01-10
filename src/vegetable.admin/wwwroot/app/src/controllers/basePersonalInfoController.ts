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

        queryTags(searchTag: string): string[]
        {
            var results: string[];
            let allTags: string[] = this.availableTabs;

            if (!searchTag) {
                // only return the first 5 initially, so the first time the autocomplete is filled, it'll only have a few to bind
                results = allTags.slice(0, 5);
            }
            else if (/^-$/.test(searchTag)) {
                // allow getting all values if they type just a "-"
                results = allTags;
            } else {
                searchTag = searchTag.toLowerCase();

                results = allTags.filter((val) => {
                    return val.toLowerCase().indexOf(searchTag) === 0;
                });
            }

            return results;
        }

        submitBasePersonalInfo(): void {
            var result: BasePersonalInfo = this.holder;
        }
        
       
    }
}