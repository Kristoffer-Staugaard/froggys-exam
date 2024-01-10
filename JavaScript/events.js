const froggysEventsMap = {};
fetch('https://froggy-e3fac-default-rtdb.europe-west1.firebasedatabase.app/events.json')
    .then(response => response.json())
    .then(data => {


        let eventsContainer = document.getElementById("eventsContainer");
        eventsContainer.id = "events-wrap";
        eventsContainer.classList.add("events");

        for (let key in data) {
            let dataarray = data[key];

            let eventsElement = document.createElement("div");
            eventsElement.classList.add("events-cards");

            let infoElement = document.createElement("div");
            infoElement.classList.add("events-infobox");

            // title, date, og description
            let textContentDiv = document.createElement("div");
            textContentDiv.classList.add("text-content");

            let titleElement = document.createElement("h2");
            titleElement.classList.add("events-title");
            titleElement.textContent = dataarray.title;

            let dateElement = document.createElement("p");
            dateElement.classList.add("events-date");
            dateElement.textContent = dataarray.date;

            let descriptionElement = document.createElement("p");
            descriptionElement.classList.add("events-description");
            descriptionElement.textContent = dataarray.description;

            textContentDiv.appendChild(titleElement);
            textContentDiv.appendChild(dateElement);
            textContentDiv.appendChild(descriptionElement);

            let imgElement = document.createElement("img");
            imgElement.classList.add("events-img");
            imgElement.src = dataarray.img;

            // button
            let buttonElement = document.createElement("button");

            let buttonDiv = document.createElement("div");
            buttonDiv.classList.add("btn-border");
            buttonDiv.textContent = "BOOK BORD";

            buttonElement.appendChild(buttonDiv);

            infoElement.appendChild(textContentDiv);
            infoElement.appendChild(buttonElement);

            eventsElement.appendChild(imgElement);
            eventsElement.appendChild(infoElement);

            eventsContainer.appendChild(eventsElement);
        }
    })
    .catch(error => console.error('Fejl:', error));
