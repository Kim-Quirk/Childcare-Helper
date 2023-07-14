/*
    This file creates a FormReport class.
    A new report can be created and all functions associated with a report are stored here.
*/

// Import what we need
import {
    formDataToJSON
  } from "./utils.js";

export default class FormReport {
    // Construct and initilize our variables
    constructor(data) {
        this.data = data;
        this.type;
        this.childInfo;
        this.childName;
        this.childrenList;
    }
    // Initlize our report
    async init() {
        // Calls to external services to get our list of children from our database
        const list = await this.data.getData('children'); 
        this.childrenList = list;

        // Create a select element so our user can select which child they are creating this report for.
        var select = document.createElement("select")
        select.setAttribute("name", "childName"); // Setting up the select element..
        select.setAttribute("class", "form-control form-control-lg");
        list.forEach(child => {
            select.innerHTML += `<option>${child.name}</option>` //Make each child's name an option for the user...
        });
        document.querySelector("#specialPadding").append(select); //Add it to our page for the user to see.
    }
    // A child has been selected for the report.
    childSelect(formElement) {
        // Grab the form information
        const json = formDataToJSON(formElement); 

        // Update the report's title at the top of the page...
        document.querySelector("#reportTitle").innerHTML = json.childName;

        // Filter through our list of children for the name the user selected. Save this specific child's information for later use.
        this.childInfo = this.childrenList.filter(child => child.name === json.childName);

        // Toggles visiblty of items on the page for the user can proceed through the report.
        this.toggleVisibility("childSelect")
        this.toggleVisibility("formOne")
    }
    // Toggles visiblty of items via ID on the page for the user can proceed through the report.
    toggleVisibility(elementID) {
        var element = document.getElementById(elementID);
        element.classList.toggle("d-none");
    }
    // Progress through the report, making items visible as needed
    progress() {
        // Collects what report the user selected they'd like to fill out...
        const formElement = document.forms["reportType"];
        const json = formDataToJSON(formElement);
        this.type = json.reportType;

        // Toggles the visibility of the correct form type the user indicated
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
    // Handles the bathroom specific report
    bathroomForm() {
        this.toggleVisibility("formOne");
        this.toggleVisibility("bathroomForm");
    }
    // Handles the food specific report
    foodForm() {
        this.toggleVisibility("formOne");
        this.toggleVisibility("foodForm");
    }
    // Handles the incident specific report
    incidentForm() {
        this.toggleVisibility("formOne");
        this.toggleVisibility("incidentForm");
    }
    // Handles the nap time specific report
    napForm() {
        this.toggleVisibility("formOne");
        this.toggleVisibility("napForm");
    }
    // Saves the final report to our database
    save(formElement) {
        const json = formDataToJSON(formElement);
        let report = {
            "child_id": this.childInfo[0]._id,
            "report": json
        }
        this.data.saveData("add_report", report)
        window.location.href="./finished.html"; //Moves user to a finished page
    }
}