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
        // console.log("Converted to json result: ", json.pickup)
        if (json.pickup == "true") {
            this.toggleVisibility("guardianFormPickUp");
            this.type = "PickUp"
            
        } else if (json.dropoff == "true") {
            this.toggleVisibility("guardianFormDropOff");
            this.type = "DropOff"
        }
        this.toggleVisibility("childInfoDisplay");
        this.toggleVisibility("dropOffOrPickUp");
    }
    save(formElement) {
        console.log("In the save function!", formElement)
        const json = formDataToJSON(formElement);
        console.log(json);
    }
    toggleVisibility(elementID) {
        var element = document.getElementById(elementID);
        console.log(elementID, element);
        element.classList.toggle("d-none");
    }
    progress(){
        this.toggleVisibility("workerForm" + this.type);
        this.toggleVisibility("guardianForm" + this.type);
    }
}