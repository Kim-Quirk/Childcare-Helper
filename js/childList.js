/*
This file creates our child list class. It handles the whole children's profile generation process.
*/

// Import what we need
import { renderListWithTemplate } from "./utils.js";

export default class ChildList {
  // Construct and initilize our variables
  constructor(data, listElement) {
    this.data = data;
    this.listElement = listElement;
  }
  // initlize our child list
  async init() {
    //Wait for children's info from backend
    const list = await this.data.getData('users');

    // Render our list of children
    this.renderList(list);
  }
  // Prepares our template (tells our information where to go in the template)
  prepareTemplate(template, child) {
    template.querySelector("#name").innerHTML = child.name;
    template.querySelector("#rx").innerHTML = child.rx;
    template.querySelector("#allergies").innerHTML = child.allergies;
    template.querySelector("#bathroom").innerHTML = child.bathroom;
    var date = new Date(child.birthday);
    template.querySelector("#bday").innerHTML = date.toLocaleString('en-GB', { timeZone: 'UTC' }).split(',')[0];
    var para = document.createElement("p");
    child.guardians.forEach(guardian => {
      if (para.innerHTML) {
        para.innerHTML = para.innerHTML + `<br/><b>${guardian.name}</b><br>${guardian.phone}<br>${guardian.email}`
      } else {
        para.innerHTML = `<b>${guardian.name}</b><br>${guardian.phone}<br>${guardian.email}`
      }
      
    });
    template.querySelector(".col").append(para);
    return template;
  }
  // Renders our list of children
  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = "";
    //get the template
    const template = document.getElementById("child-square-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate // Prepare our template
    );
  }
}
