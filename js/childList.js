import { renderListWithTemplate } from "./utils.js";

export default class ChildList {
  constructor(data, listElement) {
    this.data = data;
    this.listElement = listElement;
  }
  async init() {
    //Get info from API, wait plz
    const list = await this.data.getData('users');
    console.log(list)

    this.renderList(list);

  }
  prepareTemplate(template, child) {
    template.querySelector("#name").innerHTML = child.name;
    template.querySelector("#rx").innerHTML = child.rx;
    template.querySelector("#allergies").innerHTML = child.allergies;
    template.querySelector("#bathroom").innerHTML = child.bathroom;
    var date = new Date(child.birthday);
    template.querySelector("#bday").innerHTML = date.toLocaleString('en-GB', { timeZone: 'UTC' }).split(',')[0];
    var para = document.createElement("p");
    child.guardians.forEach(guardian => {
      // console.log(guardian);
      if (para.innerHTML) {
        para.innerHTML = para.innerHTML + `<br/><b>${guardian.name}</b><br>${guardian.phone}<br>${guardian.email}`
      } else {
        para.innerHTML = `<b>${guardian.name}</b><br>${guardian.phone}<br>${guardian.email}`
      }
      
    });
    template.querySelector(".col").append(para);
    return template;
  }
  renderList(list) {
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
}
