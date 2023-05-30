import {
    formDataToJSON
  } from "./utils.js";

export default class FormReport {
    constructor(form) {
        this.form = form;
        this.type;
    }
    init() {
        const formElement = document.forms["reportType"];
        const json = formDataToJSON(formElement);
        this.type = json.reportType;
        if (this.type == "bathroom") {
            this.bathroomForm();
        } else if (this.type == "food") {
            this.foodForm();
        }
        else if (this.type == "incident") {
            this.incidentForm();
        }
        else if (this.type == "nap") {
            this.napForm();
        }
        else if (this.type == "frown") {
            this.incidentForm();
        }
    }
    save(formElement) {
        console.log("In the save function!", formElement)
        const json = formDataToJSON(formElement);
        console.log(json);
    }
    bathroomForm() {
        var formOne = document.querySelector("#formOne");
        formOne.classList.add("d-none");
        var formTwo = document.querySelector("#bathroomForm");
        formTwo.classList.remove("d-none");
    }
    foodForm() {
        var formOne = document.querySelector("#formOne");
        formOne.classList.add("d-none");
        var formTwo = document.querySelector("#foodForm");
        formTwo.classList.remove("d-none");
    }
    incidentForm() {
        var formOne = document.querySelector("#formOne");
        formOne.classList.add("d-none");
        var formTwo = document.querySelector("#incidentForm");
        formTwo.classList.remove("d-none");
    }
    napForm() {
        var formOne = document.querySelector("#formOne");
        formOne.classList.add("d-none");
        var formTwo = document.querySelector("#napForm");
        formTwo.classList.remove("d-none");
    }
}