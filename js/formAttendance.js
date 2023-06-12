import {
    formDataToJSON
  } from "./utils.js";

export default class FormAttendance {
    constructor(form) {
        this.form = form;
        this.type;
    }
    init(formElement) {
        // const formElement = document.forms["reportType"];
        const json = formDataToJSON(formElement);
        console.log("Converted to json result: ", json.pickup)
        if (json.pickup == true) {
            this.toggleDNone("pickUpOnly");
            this.toggleDNone("guardianFormPickUp");
            this.toggleDNone("workerFormPickUp");
        } else if (json.dropoff == true) {
            this.toggleDNone("guardianFormDropOff");
            this.toggleDNone("workerFormDropOff");
        }
        this.toggleDNone("childInfoDisplay");
        this.toggleDNone("dropOffOrPickUp");
    }
    save(formElement) {
        console.log("In the save function!", formElement)
        const json = formDataToJSON(formElement);
        console.log(json);
    }
    toggleDNone(elementID) {
        var element = document.getElementById(elementID);
        console.log(elementID, element);
        element.classList.toggle("d-none");
    }
}