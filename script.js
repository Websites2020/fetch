// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//     return parent.appendChild(el);
// }

// const ul = document.getElementById("authors");

// const url = "https://randomuser.me/api/?results=10";

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//     let author = data.results;
//     console.log(author)

//     return author.map(function(author) {

//         let li = createNode('li');
//         let img = createNode('img');
//         let span = createNode('span');

//         img.src = author.picture.medium;

//         span.innerHTML = `${author.name.first} ${author.name.last}`;

//         append(li, img);
//         append(li, span);
//         append(ul,li);
//     })
// })

// // .catch(function(err) {

// //     console.log(JSON.stringify(err))

// // })

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
// const url = "https://dog.ceo/api/breed/poodle/images";

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let dog = data.message;
    console.log(dog)

    for ( var i = 0; i < 30; i++) {
        
        // let li = createNode('li');
        let img = createNode('img');

        img.src = dog[i];
        img.style = "width:100px; height:100px";
        
        // append(li, img);
        // append(ul,li);
        append(ul,img);
    }
})

});