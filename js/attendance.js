/*
This is the javascript for the drop-off/pick-up page.
*/


// import ExternalServices from "./externalServices.js";
import FormAttendance from "./formAttendance.js";
import FormReport from "./formReport.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const form = document.querySelector("#form");

const formAttendance = new FormAttendance(form);


// this is how it would look if we listen for the submit on the form
document.forms["dropOffOrPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  console.log("dropOffOrPickUp", e.target);
  formAttendance.init(e.target)
});

document.forms["guardianFormPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("guardianFormPickUp")
});