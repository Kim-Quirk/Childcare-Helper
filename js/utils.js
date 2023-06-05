// Turn on overlay
function on() {
    document.getElementById("overlay").style.display = "block";
}

// Turn off overlay

function off() {
    document.getElementById("overlay").style.display = "none";
}

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

// export function updatedHeader() {
//     // console.log(document.querySelector("#login"));
//     var account = document.querySelector("#login");
//     // console.log(account);
//     if (getLocalStorage("verified") === true) {
//       account.textContent = "Logout";
//       account.removeAttribute("href", "");

//       var name = document.createElement("li");
//       var user = getLocalStorage("user");
//       name.textContent = "Hi " + user.nickname + "!";
//       name.setAttribute("id", "profileName");

//       var parent = document.querySelector(".nav");
//       parent.appendChild(name);
//       account.addEventListener("click", () => {
//         setLocalStorage("user", undefined);
//         setLocalStorage("verified", false);
//         location.reload();
//       });
//     }
//   }

// retrieve data from localstoragef
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlItem = urlParams.get(param);
    return urlItem;
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
    console.log("In the form data to JSON function", convertedJSON)
    return convertedJSON;
  }