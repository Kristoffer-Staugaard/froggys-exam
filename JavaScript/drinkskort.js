const froggysdrinksMap = {};
fetch('https://froggy-e3fac-default-rtdb.europe-west1.firebasedatabase.app/drinks.json')
    .then(response => response.json())
    .then(data => {
        
        let contentContainer = document.getElementById("contentContainer");
        contentContainer.id = "overskrift-og-tekst";
        contentContainer.classList.add("drinkskort")

        for (let key in data) {
            let dataarray = data[key];

            
            let drinkElement = document.createElement("div");
            drinkElement.classList.add("drinksection");
      
            //drinkElement.textContent = `${dataarray.name} ${dataarray.price} kr. `;

            let nameElement = document.createElement("p");
            nameElement.classList.add("text-styling-H3");
            nameElement.textContent = dataarray.name;

            
            let priceElement = document.createElement("p");
            priceElement.classList.add("text-styling-pris");
            priceElement.textContent = `${dataarray.price} kr.`;

            
            let imageElement = document.createElement("img")
            imageElement.src = dataarray.image;
            imageElement.classList.add("drinkskortbilleder");

            drinkElement.appendChild(nameElement);
            drinkElement.appendChild(priceElement);
            drinkElement.appendChild(imageElement);
             
            contentContainer.appendChild(drinkElement);
        }
    })
    .catch(error => console.error('Fejl:', error));
