
import {
    loadHeaderFooter,
    renderListWithTemplate
} from "./utils.js";

import { defaultExport } from "../convex/getChild.js";

console.log("HERE");

loadHeaderFooter();

function prepareTemplate(template, child) {
    // template.querySelector("a").href += product.Id;
    template.querySelector("img").src = data.Images.PrimaryMedium;
    template.querySelector("img").alt += data.Name;
    template.querySelector("h3").textContent +=
        data.Name;
    return template;
}
function renderList(data) {
    // make sure the list is empty
    this.listElement.innerHTML = "";
    //get the template
    const template = document.getElementById("child-square-template");
    renderListWithTemplate(
        template,
        this.listElement,
        list,
        this.prepareTemplate
    );
}

data = await defaultExport;
console.log(data);
renderList(data);
