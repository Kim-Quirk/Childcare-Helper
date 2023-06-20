/*
This is the javascript for the drop-off/pick-up page.
*/
import ExternalServices from "./externalServices.js";
import FormAttendance from "./formAttendance.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const dataSource = new ExternalServices();

const form = document.querySelector("#form");

const formAttendance = new FormAttendance(dataSource);
formAttendance.init();



// this is how it would look if we listen for the submit on the form
document.forms["dropOffOrPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  formAttendance.pickupOrDropoff(e.target)
});

document.forms["childSelect"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  console.log("childSelect", e.target);
  formAttendance.childSelected(e.target)
});

document.forms["guardianFormPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.progress();
});

document.forms["workerFormPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.finish();
});

document.forms["guardianFormDropOff"].addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href="./finished.html";
})

document.forms["workerFormDropOff"].addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href="./finished.html";
});