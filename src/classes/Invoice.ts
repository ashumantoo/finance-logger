//classes
export class CreateInvoice {
    // client: string;
    // details: string;
    // amount: number;

    // readonly client: string;  //only readable - can't able to change
    // private details: string;  //read and wirte possible only inside the class
    // public amount: number;    //can be accessible any where inside the class or outside

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    //shortest way to creating class using constructor
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}