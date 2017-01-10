/// <reference path="../_all.ts" />
module AdminApp {
    export class ProfileMainController {
        availableTabs: string[] = null;
        searchTagText: string = '';

        static $inject = ['dataToolsService'];

        constructor(private dataToolsService: IDataToolsService) {
            this.dataToolsService.GetAvailableTags((data) => {
                this.availableTabs = data;
            });
        }

        queryTags(searchTag: string): string[] {
            var results: string[];
            let allTags: string[] = this.availableTabs;

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