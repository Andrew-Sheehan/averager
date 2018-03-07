import * as $ from "jquery";

class Averager {
    private values:number[] = [];

    constructor() {
        $("#getAverage").on("click", (event) => {
            this.findAverage();
        });
        $("#addBtn").on("click", (event:Event) => {
            this.addValue(event.currentTarget.val);
        });
    }

    public addValue(value:number):void {
        if ( value >= 0 ) {
            this.values.push(value);
        }
    }

    public findAverage():number {
        if (this.values.length > 0) {
            return this.values.reduce((accumulator, value) => accumulator + value); 
        } else {
            console.log("hi");
            return 0.0;
        }
    }
}

export {Averager};