/*
This is the report file. It listens for submit buttons then calls on appropriate functions to make the next calculations.
*/

// Import everything we need
import ExternalServices from "./externalServices.js";
import FormReport from "./formReport.js";
import { loadHeaderFooter } from "./utils.js";

// Load the html pages header and fotter
loadHeaderFooter();

// Make an external services connection (connect to backend and the database via the backend)
const dataSource = new ExternalServices();

// Create a new form report instance and initilize it
const formReport = new FormReport(dataSource);
formReport.init();


// Listen for the form's submit button...
document.forms["childSelect"].addEventListener("submit", (e) => {
  e.preventDefault();
  formReport.childSelect(e.target); // Call on the correct formreport's function
});

// Listen for the form's submit button...
document.forms["reportType"].addEventListener("submit", (e) => {
  e.preventDefault();
  formReport.progress(e.target); // Call on the correct formreport's function
});

// Listen for the form's submit button...
document.forms["foodForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  formReport.save(e.target); // Call on the correct formreport's function
});

// Listen for the form's submit button...
document.forms["bathroomForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  formReport.save(e.target) // Call on the correct formreport's function
});

// Listen for the form's submit button...
document.forms["napForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  formReport.save(e.target) // Call on the correct formreport's function
});

// Listen for the form's submit button...
document.forms["incidentForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  formReport.save(e.target); // Call on the correct formreport's function
});