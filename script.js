function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

$("#submit").click(function(){
    $("#dogs").empty();
const a = document.getElementById("1").value;
alert("Here are images of " + a + "s")
console.log(a);
    
const ul = document.getElementById("dogs");

const url = "https://dog.ceo/api/breed/" + a + "/images";

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let dog = data.message;
    console.log(dog)

    for ( var i = 0; i < 30; i++) {
  
        let img = createNode('img');

        img.src = dog[i];
        img.style = "width:100px; height:100px";
        
        append(ul,img);
    }
})

});