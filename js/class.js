
import ExternalServices from "./externalServices.js";
import ChildList from "./childList.js";
import { loadHeaderFooter } from "./utils.js";

console.log("HERE");

loadHeaderFooter();

const dataSource = new ExternalServices();

// console.log(dataSource.getData('sampleChildren.json'));

const listElement = document.querySelector("#classes");

const childrenList = new ChildList(dataSource, listElement);

childrenList.init();

