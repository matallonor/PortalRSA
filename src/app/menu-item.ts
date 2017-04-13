export class MenuItem {
    itemDescription : string;
    imgSource : string;
    url: string;

    constructor(itemDescription: string, imgSource : string, url: string) { 
        this.itemDescription = itemDescription;
        this.imgSource = imgSource;
        this.url = url;
    }
}
