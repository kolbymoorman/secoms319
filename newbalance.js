fetch("data.json")
.then(response=>response.json())
.then(Newbalance=>loadNewbalance(Newbalance));

function loadNewbalance(Newbalance){
    var newbalanceshoe1 = document.getElementById("newbalanceshoe1");
    var newbalaceshoe2 = document.getElementById("newbalanceshoe2");
    var newbalanceshoe3 = document.getElementById("newbalanceshoe3");
    var newbalanceshoe4 = document.getElementById("newbalanceshoe4");

    var newbalance1 = document.getElementById("newbalance1");
    var newbalance2 = document.getElementById("newbalance2");
    var newbalance3 = document.getElementById("newbalance3");
    var newbalance4 = document.getElementById("newbalance4");

    for(var i=0; i<Newbalance.newbalance.length;i++){
        let title = Newbalance.newbalance[i].title;
        let description = Newbalance.newbalance[i].description;
        let url = Newbalance.newbalance[i].url;

        let newbalanceshoe = document.createElement("div");
        newbalanceshoe.innerHTML = `<img src = ${url} style ="width: 50 px; height :400px;object-fit:cover"class = "card-img-top" alt="Newbalance Shoe"></img>`;
        
        let newbalancetxt = document.createElement("p");
        newbalancetxt.innerHTML = `<p class = "card-text"> <strong> ${title}</strong></p>`;

        let descriptions = document.createElement("p");
        descriptions.innerHTML = `<p class = "card-text"> ${description}</p>`;

        if(Newbalance.newbalance[i].title === "New Balance 550"){
            newbalanceshoe1.appendChild(newbalanceshoe);
            newbalance1.appendChild(newbalancetxt);
            desciption1.appendChild(descriptions);
        }
        else if(Newbalance.newbalance[i].title === "New Balance 574 Core"){
            newbalaceshoe2.appendChild(newbalanceshoe);
            newbalance2.appendChild(newbalancetxt);
            desciption2.appendChild(descriptions);
        }
        else if(Newbalance.newbalance[i].title === "New Balance Revlite 247"){
            newbalanceshoe3.appendChild(newbalanceshoe);
            newbalance3.appendChild(newbalancetxt);
            desciption3.appendChild(descriptions);
        }
        else if(Newbalance.newbalance[i].title === "New Balance 997H"){
            newbalanceshoe4.appendChild(newbalanceshoe);
            newbalance4.appendChild(newbalancetxt);
            desciption4.appendChild(descriptions);
        }
    }
}