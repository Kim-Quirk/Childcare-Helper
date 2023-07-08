/*
This is the javascript for the drop-off/pick-up page.
It listens for submit buttons then calls on appropriate functions to make the next calculations.
*/

// Import everything we need
import ExternalServices from "./externalServices.js";
import FormAttendance from "./formAttendance.js";
import { loadHeaderFooter } from "./utils.js";

// Load the html pages header and fotter
loadHeaderFooter();

// Make an external services connection (connect to backend and the database via the backend)
const dataSource = new ExternalServices();

// Create a new form attendance instance and initilize it
const formAttendance = new FormAttendance(dataSource);
formAttendance.init();


// Listen for the form's submit button...
document.forms["dropOffOrPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.pickupOrDropoff(e.target) // Call on the correct form attendance's function
});

// Listen for the form's submit button...
document.forms["childSelect"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.childSelected(e.target) // Call on the correct form attendance's function
});

// Listen for the form's submit button...
document.forms["guardianFormPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.progress(); // Call on the correct form attendance's function
});

// Listen for the form's submit button..
document.forms["workerFormPickUp"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.finish(); // Call on the correct form attendance's function
});

// Listen for the form's submit button..
document.forms["guardianFormDropOff"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.progress(); // Call on the correct form attendance's function
})

// Listen for the form's submit button..
document.forms["workerFormDropOff"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.checkItems(e.target); // Call on the correct form attendance's function
});

// Listen for the form's submit button..
document.forms["withItems"].addEventListener("submit", (e) => {
  e.preventDefault();
  formAttendance.finish(); // Call on the correct form attendance's function
});