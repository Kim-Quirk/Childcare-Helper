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
    // console.log(child)
    template.querySelector("#name").innerHTML = child.name;
    var uniqueID1 = child.name.split(" ").join("");
    var uniqueID2 = child.birthday.split(" ").join("").split("/").join("");
    var uniqueID = "#" + uniqueID1 + uniqueID2;
    console.log(uniqueID)
    template.querySelector("#collpaselink").href = uniqueID;
    template.querySelector(".collapse").id = uniqueID;
    template.querySelector("#rx").innerHTML = child.rx;
    template.querySelector("#allergies").innerHTML = child.allergies;
    template.querySelector("#bathroom").innerHTML = child.bathroom;
    template.querySelector("#bday").innerHTML = child.birthday;
    child.guardians.forEach(guardian => {
      console.log(guardian);
      var para = document.createElement("p");
      para.innerHTML = `<b>${guardian.name}</b><br>${guardian.phone}<br>${guardian.email}`
      template.querySelector(".collapse").append(para)
    });

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
