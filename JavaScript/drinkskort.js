const froggysdrinksMap = {};

const displayFirstThreeElements = window.location.href.includes('index.html');
fetch('https://froggy-e3fac-default-rtdb.europe-west1.firebasedatabase.app/drinks.json')
    .then(response => response.json())
    .then(data => {
        let contentContainer = document.getElementById("contentContainer");
        contentContainer.id = "overskrift-og-tekst";
        contentContainer.classList.add("drinkskort")

        let count = 0; 

        for (let key in data) {
            if (displayFirstThreeElements && count >= 3) {
                break; 
            }

            let dataarray = data[key];
            let drinkElement = document.createElement("div");
            drinkElement.classList.add("drinksection");

            let nameElement = document.createElement("h3");
            nameElement.textContent = dataarray.name;

            let priceElement = document.createElement("p");
            priceElement.textContent = `${dataarray.price} kr.`;

            let imageElement = document.createElement("img")
            imageElement.src = dataarray.image;
            imageElement.classList.add("drinkskortbilleder");

            drinkElement.appendChild(nameElement);
            drinkElement.appendChild(priceElement);
            drinkElement.appendChild(imageElement);

            contentContainer.appendChild(drinkElement);

            count++;
        }
    })
    .catch(error => console.error('Fejl:', error));
