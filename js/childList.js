import { renderListWithTemplate } from "./utils.js";


// // backup
// const dataBackup = [{
//   "name": "Johnny Doe",
//   "allergies": ["N/A"],
//   "rx": ["N/A"],
//   "bathroom": "diapers",
//   "birthday": "12/08/2021",
//   "guardians": [
//       {
//           "name": "Jane Doe",
//           "phone": "888-8888-8888",
//           "email": "janedoe@email.com"
//       },
//       {
//           "name": "John Doe",
//           "phone": "888-8888-8888",
//           "email": "johndoe@email.com"
//       }
//   ]
// },
// {
//   "name": "Jane Doe",
//   "allergies": ["N/A"],
//   "rx": ["N/A"],
//   "bathroom": "diapers",
//   "birthday": "12/08/2021",
//   "guardians": [
//       {
//           "name": "Jane Doe",
//           "phone": "888-8888-8888",
//           "email": "janedoe@email.com"
//       },
//       {
//           "name": "John Doe",
//           "phone": "888-8888-8888",
//           "email": "johndoe@email.com"
//       }
//   ]
// },
// {
//   "name": "Joe Bough",
//   "allergies": ["N/A"],
//   "rx": ["N/A"],
//   "bathroom": "diapers",
//   "birthday": "07/12/2020",
//   "guardians": [
//       {
//           "name": "Jane Bough",
//           "phone": "888-8888-8888",
//           "email": "janebough@email.com"
//       },
//       {
//           "name": "Joseph Bough",
//           "phone": "888-8888-8888",
//           "email": "josephbough@email.com"
//       }
//   ]
// },
// {
//   "name": "Kate Smart",
//   "allergies": ["N/A"],
//   "rx": ["N/A"],
//   "bathroom": "diapers",
//   "birthday": "10/25/2021",
//   "guardians": [
//       {
//           "name": "Kamila Smart",
//           "phone": "888-8888-8888",
//           "email": "kamilasmart@email.com"
//       }
//   ]
// },
// {
//   "name": "Alex Dough",
//   "allergies": ["N/A"],
//   "rx": ["N/A"],
//   "bathroom": "diapers",
//   "birthday": "12/08/2021",
//   "guardians": [
//       {
//           "name": "Alexa Dough",
//           "phone": "888-8888-8888",
//           "email": "alexadough@email.com"
//       },
//       {
//           "name": "Alexander Dough",
//           "phone": "888-8888-8888",
//           "email": "alexanderdough@email.com"
//       }
//   ]
// }]

export default class ChildList {
  constructor(data, listElement) {
    this.data = data;
    this.listElement = listElement;
  }
  async init() {
    //Get info from API, wait plz
    const list = await this.data.getData('users');
    console.log(list)

    // if (list == undefined) {
    //   this.renderList(dataBackup);
    // }

    // const list = dataBackup

    //Render children list
    // this.renderList(list);

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
