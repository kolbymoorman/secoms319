fetch("data.json")
.then(response=>response.json())
.then(Nike=>loadNike(Nike));

function loadNike(Nike){
    var nikeshoe1 = document.getElementById("nikeshoe1");
    var nikeshoe2 = document.getElementById("nikeshoe2");
    var nikeshoe3 = document.getElementById("nikeshoe3");
    var nikeshoe4 = document.getElementById("nikeshoe4");



    var nike1 = document.getElementById("nike1");
    var nike2 = document.getElementById("nike2");
    var nike3 = document.getElementById("nike3");
    var nike4 = document.getElementById("nike4");

    for(var i=0; i<Nike.nike.length;i++){
        let title = Nike.nike[i].title;
        let description = Nike.nike[i].description;
        let url = Nike.nike[i].url;

        let nikeshoe = document.createElement("div");
        nikeshoe.innerHTML = `<img src = ${url} style ="width: 50 px; height :400px; object-fit:cover;"class = "card-img-top" alt="Nike Shoe"></img>`;

        let niketxt = document.createElement("p");
        niketxt.innerHTML = `<p class="card-text"> <strong>${title}</strong></p>`;

        let descriptions =document.createElement("p");
        descriptions.innerHTML = `<p class="card-text"> ${description}</p>`


        if(Nike.nike[i].title === "Nike Air Force 1"){
                nikeshoe1.appendChild(nikeshoe);
                nike1.appendChild(niketxt);
                desciption1.appendChild(descriptions);
        }
        else if(Nike.nike[i].title === "Nike Air Max 97"){
                nikeshoe2.appendChild(nikeshoe);
                nike2.appendChild(niketxt);
                desciption2.appendChild(descriptions);
        }
        else if(Nike.nike[i].title === "Nike Air Max 270"){
                nikeshoe3.appendChild(nikeshoe);
                nike3.appendChild(niketxt);
                desciption3.appendChild(descriptions);
        }
        else if(Nike.nike[i].title === "Nike Zoom"){
                nikeshoe4.appendChild(nikeshoe);
                nike4.appendChild(niketxt);
                desciption4.appendChild(descriptions);
        }
    }
}