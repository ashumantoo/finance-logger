import { CreateInvoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

/**=====================================================================================
 *                                  DOM MANIPULATION IN TS
 * =====================================================================================
 */
// const anchor = document.querySelector('a')!;
// // if (anchor) {
// //     const anchor = document.querySelector('a');
// // }
// console.log(anchor.href);

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new CreateInvoice('Jack', 'work on the mario website', 270);
// docTwo = new Payment('Danial', 'some other work', 250);
// const docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invoiceOne = new CreateInvoice('mario', 'work on the mario website', 250);
// const invoiceTwo = new CreateInvoice('jakson', 'work on some project website', 300);
// let invoices: CreateInvoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// console.log(invoiceOne, invoiceTwo);

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFontElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new CreateInvoice(toform.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber)
    }
    e.preventDefault();
    // console.log(
    //     type.value,
    //     toform.value,
    //     details.value,
    //     amount.valueAsNumber
    // );
    console.log(doc);

});