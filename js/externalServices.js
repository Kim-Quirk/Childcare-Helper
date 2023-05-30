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
    getData(data) {
        // instead we will pass the category we want in here when we need it.
        console.log(baseURL + `${data}`)
        return fetch(baseURL + `${data}`).then(convertToJson);
    }
}
