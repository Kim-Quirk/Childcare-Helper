
// import ExternalServices from "./externalServices.js";
import FormReport from "./formReport.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

// const dataSource = new ExternalServices();

// console.log(dataSource.getData('sampleChildren.json'));

const modalElement = document.querySelector("#modalElement");

const formReport = new FormReport();

// this is how it would look if we listen for the submit on the form
document.forms["reportType"].addEventListener("submit", (e) => {
    e.preventDefault();
    // e.target would contain our form in this case
    FormReport.init();
  });

FormReport.init(type, modalElement);

