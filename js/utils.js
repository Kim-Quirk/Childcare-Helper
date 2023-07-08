/*
This is the utility file. Utility functions are stored here. These are functions that are used repeatedly or help simplify code in other portions of this project.
*/

// Convert to text
function convertToText(res) {
    if (res.ok) {
        return res.text();
    } else {
        throw new Error("Bad Response");
    }
}

// load the header and footer
export async function loadHeaderFooter() {
    const header = await loadTemplate("../partials/header.html");
    const footer = await loadTemplate("../partials/footer.html");
    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");
    renderWithTemplate(header, headerElement);
    renderWithTemplate(footer, footerElement);
    // updatedHeader();
}

// Captilize the first letter of a word
export function capitlizeFirstLetter(word) {
   return word.charAt(0).toUpperCase() + word.slice(1);
}

//Load a list with template
export function renderListWithTemplate(
    template,
    parentElement,
    list,
    callback
) {
    list.forEach((item) => {
        const clone = template.content.cloneNode(true);
        const templateWithData = callback(clone, item);
        parentElement.appendChild(templateWithData);
    });
}

//Render a template
export function renderWithTemplate(template, parent, data, callback) {
    let clone = template.content.cloneNode(true);
    if (callback) {
        clone = callback(clone, data);
    }
    parent.appendChild(clone);
}

//Load template
export async function loadTemplate(path) {
    const html = await fetch(path).then(convertToText);
    const template = document.createElement("template");
    template.innerHTML = html;
    return template;
}

// takes a form element and returns an object where the key is the "name" of the form input.
export function formDataToJSON(formElement) {
    
    const formData = new FormData(formElement),
      convertedJSON = {};

    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
    return convertedJSON;
  }