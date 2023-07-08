
/*
    This file handles the generation of children's profiles.
*/

// Import what we need
import ExternalServices from "./externalServices.js";
import ChildList from "./childList.js";
import { loadHeaderFooter } from "./utils.js";

// Load our header and footer
loadHeaderFooter();

// Make an external services connection (connect to backend and the database via the backend)
const dataSource = new ExternalServices();

// Grab our element we want to dynamically load our list of children into
const listElement = document.querySelector("#classes");

// Create a new child list instance and intilize it
const childrenList = new ChildList(dataSource, listElement);
childrenList.init();

