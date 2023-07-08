/*
    This file creates a FormAttendance class. It is used for the drop-off / pick-up page.
    A new attendance instance can be created and all functions associated with drop-off/pick-up are stored here.
*/

// Import what we need
import {
    formDataToJSON,
    capitlizeFirstLetter
} from "./utils.js";

export default class FormAttendance {
    // Construct and initilize our variables
    constructor(data) {
        this.form;
        this.type;
        this.data = data;
        this.childrenList;
        this.childInfo;
        this.reports;
    }
    // Initlize our attendance instance
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
    // A child has been selected for the drop-off / pick-up process.
    async childSelected(formElement) {
        // Grab the form information
        const json = formDataToJSON(formElement);

        // Update the title at the top of the page...
        document.querySelector("#reportTitle").innerHTML = json.childName;
        document.querySelector("#childsName").innerHTML = json.childName;

        // Toggles visiblty of items on the page for the user can proceed through the drop-off / pick-up process.
        this.toggleVisibility("childSelect");
        this.toggleVisibility("dropOffOrPickUp");

        // Filter through our list of children for the name the user selected. Save this specific child's information for later use.
        this.childInfo = this.childrenList.filter(child => child.name === json.childName);

        // Calls to external services to get our child's reports from our database
        this.reports = await this.data.getData('find_report', this.childInfo[0]._id)

        // Update the page to reflect the child's information
        document.querySelector("#name").innerHTML = this.childInfo[0].name;
        document.querySelector("#rx").innerHTML = this.childInfo[0].rx;
        document.querySelector("#allergies").innerHTML = this.childInfo[0].allergies;
        document.querySelector("#bathroom").innerHTML = this.childInfo[0].bathroom;
        var date = new Date(this.childInfo[0].birthday);
        document.querySelector("#bday").innerHTML = date.toLocaleString('en-GB', { timeZone: 'UTC' }).split(',')[0];
        var para = document.createElement("p");
        this.childInfo[0].guardians.forEach(guardian => {
            if (para.innerHTML) {
                para.innerHTML = para.innerHTML + `<br/><b>${guardian.name}</b><br>${guardian.phone}<br>${guardian.email}`
            } else {
                para.innerHTML = `<b>${guardian.name}</b><br>${guardian.phone}<br>${guardian.email}`
            }

        });
        document.querySelector("#childsInfo").append(para); //Display our updated information to the html page
    }
    // Handles when the user selects they are dropping-off or picking-up a child
    pickupOrDropoff(formElement) {
        // Grab form information
        const json = formDataToJSON(formElement);

        //If the user selected pickup...
        if (json.pickup == "true") {  
            this.toggleVisibility("guardianFormPickUp"); //Make associated form visible
            this.type = "PickUp"
            document.querySelector("#reportType").innerHTML = "Pick-up"; //Update title of page to reflect they chose pickup

            // Display the child's daily summary (all the child's reports)
            // This only happens during the pick-up process
            var span = document.querySelector("#dailySummary");
            this.reports.forEach(item => {
                span.innerHTML += `<h3>Report</h3><ul>`
                for (let key in item.report) {
                    var title = capitlizeFirstLetter(key);
                    var result = capitlizeFirstLetter(item.report[key])
                    span.innerHTML +=
                        `<li>${title}: ${result}</li>`;
                }
                span.innerHTML += `</ul>`
            });
            span.innerHTML += `<hr>`;

        }
        // If the user selected dropoff... 
        else if (json.dropoff == "true") {
            this.toggleVisibility("guardianFormDropOff"); //Make associated form visible
            this.type = "DropOff"
            document.querySelector("#reportType").innerHTML = "Drop-off"; //Update title of page to reflect they chose pickup

        }

        // Make these items visible, regardless of if it is a pickup or dropoff
        this.toggleVisibility("dropOffOrPickUp");
        this.toggleVisibility("childInfoDisplay");
    }
    // Check if the user indicated the child was dropped off with items
    checkItems(formElement) {
        const json = formDataToJSON(formElement)
        if (json.items === "true") { //User indicated child is being dropped off with items
            this.toggleVisibility("withItems"); //Make the rest of the item form visible
            this.toggleVisibility("workerFormDropOff"); //Hide the old form
        }
        else { //User did not indicate child is dropped off with items
            this.finish(); //Nothing else to do, so finish the attednance process
        }
    }
    // Finish the attendance process
    finish() {
        window.location.href="./finished.html"; //Take user to a complete/finished screen
    }
    // Toggles visiblty of items via ID on the page for the user can proceed through the report.
    toggleVisibility(elementID) {
        var element = document.getElementById(elementID);
        element.classList.toggle("d-none");
    }
    // Progress through the attendance process by toggling visiblilty of items as needed
    progress() {
        this.toggleVisibility("workerForm" + this.type);
        this.toggleVisibility("guardianForm" + this.type);
    }
}