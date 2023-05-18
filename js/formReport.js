import {
    formDataToJSON
  } from "./utils.js";

export default class FormReport {
    constructor(type) {
        this.type = type;
        this.modalElement = modalElement;
    }
    init() {
        const formElement = document.forms["reportType"];
        const json = formDataToJSON(formElement);
        console.log(json)
        if (this.type == "bathroom") {
            bathroomForm();
        } else if (this.type == "food") {
            foodForm();
        }
        else if (this.type == "incident") {
            incidentForm();
        }
        else if (this.type == "nap") {
            napForm();
        }
    }
    bathroomForm() {
        form = document.createElement("form");
        form.innerHtml =
            `<div id="bathroom-appear">
        <br>
        <h2>Bathroom Information</h2>
        <div>
            <input type="time" class="form-control form-control-lg" />
        </div>
        <small class="text-body-secondary">When did they go to the bathroom?</small>
        <br>
        <br>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option disabled selected>Select Potty Training Status</option>
            <option value="1">No Potty Trained / Diapers</option>
            <option value="2">Currently Potty Training / Pull-ups</option>
            <option value="3">Potty Training / Underwear</option>
        </select>
        <br>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="accident">
            <label class="form-check-label" for="accident">Select this if the child had an accident.</label>
        </div>
        <br>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px"></textarea>
            <label for="floatingTextarea2">Comments</label>
        </div>
        <small class="text-body-secondary">Any additional comments?</small>
        <br>
        <br>
    </div>
    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Submit</button>`
    }
    foodForm() {
        form = document.createElement("form");
        form.innerHtml =
            `<div id="food-appear">
        <br>
        <h2>Food Information</h2>
        <div>
            <input type="time" class="form-control form-control-lg" />
        </div>
        <small class="text-body-secondary">When did they eat?</small>
        <br>
        <br>
        <p>Select Food Type(s):</p>
        <div class="form-check custom">
            <input class="form-check-input" type="checkbox" value="vegetables" id="vegetables">
            <label class="form-check-label" for="vegetables">
                Vegetables
            </label>
        </div>
        <div class="form-check custom">
            <input class="form-check-input" type="checkbox" value="fruits" id="fruits">
            <label class="form-check-label" for="fruits">
                Fruits
            </label>
        </div>
        <div class="form-check custom">
            <input class="form-check-input" type="checkbox" value="grains" id="grains">
            <label class="form-check-label" for="grains">
                Grains
            </label>
        </div>
        <div class="form-check custom">
            <input class="form-check-input" type="checkbox" value="protein" id="protein">
            <label class="form-check-label" for="protein">
                Protein
            </label>
        </div>
        <div class="form-check custom">
            <input class="form-check-input" type="checkbox" value="dairy" id="dairy">
            <label class="form-check-label" for="dairy">
                Dairy
            </label>
        </div>
        <br>
        <div class="form-floating">
            <input type="number" class="form-control" id="num-servings" placeholder="1"
                value="num-servings">
            <label for="num-servings">Number of Servings</label>
        </div>
        <small class="text-body-secondary">How many servings total did they eat?</small>
        <br>
        <br>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px"></textarea>
            <label for="floatingTextarea2">Comments</label>
        </div>
        <small class="text-body-secondary">Any additional comments?</small>
        <br>
        <br>
    </div>
    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Submit</button>`
    }
    incidentForm() {
        form = document.createElement("form");
        form.innerHtml =
            `<div id="incident-appear">
        <br>
        <h2>Incident Information</h2>
        <div>
            <input type="time" class="form-control form-control-lg" />
        </div>
        <small class="text-body-secondary">When did this incident occur?</small>
        <br>
        <br>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option disabled selected>Select Incident Type</option>
            <option value="accident">Potty Accident</option>
            <option value="misbehavior">Misbehavior</option>
            <option value="injury">Injury</option>
            <option value="other">Other</option>
        </select>
        <br>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px"></textarea>
            <label for="floatingTextarea2">Additional Report Information</label>
        </div>
        <small class="text-body-secondary">Please fill out a small report here with details about this incident.</small>
        <br>
        <br>
    </div>
    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Submit</button>`
    }
    napForm() {
        form = document.createElement("form");
        form.innerHtml =
            `<div id="nap-appear">
        <br>
        <h2>Incident Information</h2>
        <div>
            <input type="time" class="form-control form-control-lg" />
        </div>
        <small class="text-body-secondary">When did the nap time start?</small>
        <br>
        <br>
        <div class="form-floating">
        <input type="number" class="form-control" id="nap-length" placeholder="1"
            value="nap-length">
        <label for="nap-length">Nap length, in minutes</label>
        </div>
        <small class="text-body-secondary">How long did they sleep (in minutes)?</small>
        <br>
        <br>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px"></textarea>
            <label for="floatingTextarea2">Comments</label>
        </div>
        <small class="text-body-secondary">Any additional comments?</small>
        <br>
        <br>
    </div>
    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Submit</button>`
    }
}