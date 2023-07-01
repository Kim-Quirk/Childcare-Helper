import {
    formDataToJSON
} from "./utils.js";

export default class FormAttendance {
    constructor(data) {
        this.form;
        this.type;
        this.data = data;
        this.childrenList;
        this.childInfo;
    }
    async init() {
        const list = await this.data.getData('children');
        this.childrenList = list;
        // console.log(list)
        var select = document.createElement("select")
        select.setAttribute("name", "childName");
        select.setAttribute("class", "form-control form-control-lg");
        list.forEach(child => {
            select.innerHTML += `<option>${child.name}</option>`
        });
        document.querySelector("#specialPadding").append(select);
    }
    childSelected(formElement) {
        const json = formDataToJSON(formElement);
        console.log(json.childName)
        
        document.querySelector("#reportTitle").innerHTML = json.childName;
        document.querySelector("#childsName").innerHTML = json.childName;
        
        this.toggleVisibility("childSelect");
        this.toggleVisibility("dropOffOrPickUp");
        this.childInfo = this.childrenList.filter(child => child.name === json.childName);
        console.log(this.childInfo);

        document.querySelector("#name").innerHTML = this.childInfo[0].name;
        document.querySelector("#rx").innerHTML = this.childInfo[0].rx;
        document.querySelector("#allergies").innerHTML = this.childInfo[0].allergies;
        document.querySelector("#bathroom").innerHTML = this.childInfo[0].bathroom;
        var date = new Date(this.childInfo[0].birthday);
        document.querySelector("#bday").innerHTML = date.toLocaleString('en-GB', { timeZone: 'UTC' }).split(',')[0];
        var para = document.createElement("p");
        this.childInfo[0].guardians.forEach(guardian => {
            // console.log(guardian);
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

        } else if (json.dropoff == "true") {
            this.toggleVisibility("guardianFormDropOff");
            this.type = "DropOff"
            document.querySelector("#reportType").innerHTML = "Drop-off";

        }        
        console.log("form element", formElement)
        this.toggleVisibility("dropOffOrPickUp");
        this.toggleVisibility("childInfoDisplay");
    }
    save(formElement) {
        console.log("In the save function!", formElement)
        console.log("Save to this child:", this.childInfo)
        const json = formDataToJSON(formElement);
        console.log(json);
    }
    toggleVisibility(elementID) {
        var element = document.getElementById(elementID);
        console.log(elementID, element);
        element.classList.toggle("d-none");
    }
    progress() {
        this.toggleVisibility("workerForm" + this.type);
        this.toggleVisibility("guardianForm" + this.type);
    }
}