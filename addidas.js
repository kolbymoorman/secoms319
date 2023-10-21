fetch("data.json")
.then(response=>response.json())
.then(Addidas=>loadAddidas(Addidas));

function loadAddidas(Addidas){
    var addidasshoe1 = document.getElementById("addidasshoe1");
    var addidasshoe2 = document.getElementById("addidasshoe2");
    var addidasshoe3 = document.getElementById("addidasshoe3");
    var addidasshoe4 = document.getElementById("addidasshoe4");

    var addidas1 = document.getElementById("addidas1");
    var addidas2 = document.getElementById("addidas2");
    var addidas3 = document.getElementById("addidas3");
    var addidas4 = document.getElementById("addidas4");

    var price1 = document.getElementById("price1");
    var price2 = document.getElementById("price2");
    var price3 = document.getElementById("price3");
    var price4 = document.getElementById("price4");

    for(var i=0; i<Addidas.addidas.length;i++){
        let title = Addidas.addidas[i].title;
        let description = Addidas.addidas[i].description;
        let price = Addidas.addidas[i].price;
        let url = Addidas.addidas[i].url;

        let addidasshoe = document.createElement("div");
        addidasshoe.innerHTML = `<img src = ${url} style ="width: 50 px; height :400px; object-fit:cover;fill:20px"  class = "card-img-top" alt="Nike Shoe"></img>`;
        
        let addidastxt = document.createElement("p");
        addidastxt.innerHTML = `<p class = "card-text"> <strong> ${title}</strong></p>`;

        let descriptions = document.createElement("p");
        descriptions.innerHTML = `<p class = "card-text"> ${description}</p>`;

        let prices = document.createElement("small");
        prices.innerHTML=`<small class = "text-body-secondary">${price}  </small>`;

        if(Addidas.addidas[i].title === "Addidas Superstar"){
            addidasshoe1.appendChild(addidasshoe);
            addidas1.appendChild(addidastxt);
            desciption1.appendChild(descriptions);
            price1.appendChild(prices);
        }
        else if(Addidas.addidas[i].title === "Addidas Hoops Mid Shoe"){
            addidasshoe2.appendChild(addidasshoe);
            addidas2.appendChild(addidastxt);
            desciption2.appendChild(descriptions);
            price2.appendChild(prices);
        }
        else if(Addidas.addidas[i].title === "Addidas Forum Low Shoe"){
            addidasshoe3.appendChild(addidasshoe);
            addidas3.appendChild(addidastxt);
            desciption3.appendChild(descriptions);
            price3.appendChild(prices);
        }
        else if(Addidas.addidas[i].title === "Addidas ZX 750"){
            addidasshoe4.appendChild(addidasshoe);
            addidas4.appendChild(addidastxt);
            desciption4.appendChild(descriptions);
            price4.appendChild(prices);
        }
    }
}