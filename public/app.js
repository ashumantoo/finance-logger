"use strict";
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
var form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
var type = document.querySelector('#type');
var toform = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
