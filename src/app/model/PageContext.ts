export class PageContext {
    public data: any[] = [];   
    
    public lastDataItem(): any {
        return this.data[this.data.length - 1];
    }
}