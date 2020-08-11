/**=====================================================================================
 *                                  DOM MANIPULATION IN TS
 * =====================================================================================
 */
// const anchor = document.querySelector('a')!;
// // if (anchor) {
// //     const anchor = document.querySelector('a');
// // }
// console.log(anchor.href);

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFontElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber
    );
});
