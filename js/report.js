
// import ExternalServices from "./externalServices.js";
import FormReport from "./formReport.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const form = document.querySelector("#form");

const formReport = new FormReport(form);


// this is how it would look if we listen for the submit on the form
document.forms["reportType"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  console.log("Form type results", e.target);
  formReport.init();
});

document.forms["foodForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Saving????")
  formReport.save(document.forms["foodForm"]);
  window.location.href="./finished.html";
});

document.forms["bathroomForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Saving????")
  formReport.save(e.target);
  window.location.href="./finished.html";
});

document.forms["napForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Saving????")
  formReport.save(e.target);
  window.location.href="./finished.html";
});

document.forms["incidentForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Saving????")
  formReport.save(e.target);
  window.location.href="./finished.html";
});