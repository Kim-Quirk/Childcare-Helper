// testing URL
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
    async getData(data, info = "N/A") {
        if (info !== "N/A") {
            console.log("Not NA! Info,", info);
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
