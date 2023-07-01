import {
    formDataToJSON
  } from "./utils.js";

export default class FormReport {
    constructor(data) {
        this.data = data;
        this.type;
        this.childInfo;
        this.childName;
        this.childrenList;
    }
    async init() {
        try { const list = await this.data.getData('users'); }
        catch (err) {
            console.log(err);
        }
        this.childrenList = list;
        var select = document.createElement("select")
        select.setAttribute("name", "childName");
        select.setAttribute("class", "form-control form-control-lg");
        list.forEach(child => {
            select.innerHTML += `<option>${child.name}</option>`
        });
        document.querySelector("#specialPadding").append(select);
    }
    childSelect(formElement) {
        const json = formDataToJSON(formElement);
        console.log(json.childName)
        document.querySelector("#reportTitle").innerHTML = json.childName;
        this.childInfo = this.childrenList.filter(child => child.name === json.childName);
        this.toggleVisibility("childSelect")
        this.toggleVisibility("formOne")
    }
    toggleVisibility(elementID) {
        var element = document.getElementById(elementID);
        console.log(elementID, element);
        element.classList.toggle("d-none");
    }
    progress() {
        const formElement = document.forms["reportType"];
        const json = formDataToJSON(formElement);
        console.log("Converted to json result: ", json)
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
        console.log("Save to this child:", this.childInfo)
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