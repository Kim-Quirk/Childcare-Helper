import {
    formDataToJSON,
    capitlizeFirstLetter
} from "./utils.js";

export default class FormAttendance {
    constructor(data) {
        this.form;
        this.type;
        this.data = data;
        this.childrenList;
        this.childInfo;
        this.reports;
    }
    async init() {
        const list = await this.data.getData('children');
        this.childrenList = list;
        var select = document.createElement("select")
        select.setAttribute("name", "childName");
        select.setAttribute("class", "form-control form-control-lg");
        list.forEach(child => {
            select.innerHTML += `<option>${child.name}</option>`
        });
        document.querySelector("#specialPadding").append(select);
    }
    async childSelected(formElement) {
        const json = formDataToJSON(formElement);

        document.querySelector("#reportTitle").innerHTML = json.childName;
        document.querySelector("#childsName").innerHTML = json.childName;

        this.toggleVisibility("childSelect");
        this.toggleVisibility("dropOffOrPickUp");
        this.childInfo = this.childrenList.filter(child => child.name === json.childName);

        this.reports = await this.data.getData('find_report', this.childInfo[0]._id)

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
        document.querySelector("#childsInfo").append(para);
    }
    pickupOrDropoff(formElement) {
        const json = formDataToJSON(formElement);
        if (json.pickup == "true") {
            this.toggleVisibility("guardianFormPickUp");
            this.type = "PickUp"
            document.querySelector("#reportType").innerHTML = "Pick-up";

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

        } else if (json.dropoff == "true") {
            this.toggleVisibility("guardianFormDropOff");
            this.type = "DropOff"
            document.querySelector("#reportType").innerHTML = "Drop-off";

        }
        this.toggleVisibility("dropOffOrPickUp");
        this.toggleVisibility("childInfoDisplay");
    }
    checkItems(formElement) {
        const json = formDataToJSON(formElement)
        if (json.items === "true") {
            this.toggleVisibility("withItems");
            this.toggleVisibility("workerFormDropOff");
        }
        else {
            this.finish();
        }
    }
    finish() {
        window.location.href="./finished.html";
    }
    toggleVisibility(elementID) {
        var element = document.getElementById(elementID);
        element.classList.toggle("d-none");
    }
    progress() {
        this.toggleVisibility("workerForm" + this.type);
        this.toggleVisibility("guardianForm" + this.type);
    }
}