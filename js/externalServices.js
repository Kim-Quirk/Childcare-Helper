/*
    This file is our external services. It handles requests to APIs, such as our backend.
    It returns the results of these requests to our front-end.
*/

// Initilize our base url
const baseURL = "http://localhost:3000/";

// Convert to JSON
async function convertToJson(res) {
    const jsonResponse = await res.json();
    if (res.ok) {
        console.log(jsonResponse);
        return jsonResponse;
    } else {
        throw { name: "servicesError", message: jsonResponse };
    }
}

export default class ExternalServices {
    constructor(data) {
        this.data = data;
    }
    // Request information from the backend
    async getData(data, info = "N/A") {
        if (info !== "N/A") {
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "child_id": info
                }
            };
            return fetch(baseURL + `${data}`, options).then(
                convertToJson
            );
        } else {
            return fetch(baseURL + `${data}`).then(convertToJson);
        }
        
    }
    // Send information to be saved to the database
    async saveData(data, info) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        };
        const response = await fetch(baseURL + `${data}`, options).then(
            convertToJson
        );
        console.log(response);
    }
}
