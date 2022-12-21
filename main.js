
function getData() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      console.log("response :>> ", response);
      return response.json();
    })
      .then((result) => {
        console.log("result :>> ", result);
      controller(result);
      
})
    .catch((error) => {
      console.log("error :>> ", error);
    });
    
}

getData();;
document.getElementById("new-joke").addEventListener("click", getData);

function controller(result) {
  displayCards(result);
}

function displayCards(result) {
  const cardContainer = document.getElementById("card-place");
  cardContainer.setAttribute("class", "container");
  cardContainer.innerHTML = "";

    const card = document.createElement("div");
    card.setAttribute("class", "card text-black bg-light mb-3 border-black mb-3 border border-2 border-dark rounded-1");
    card.setAttribute("style", "width: 35rem");

    const image = document.createElement("img")
    image.setAttribute("class", "card-img-top text-dark bg-light mb-3 cl-1 border-bottom border-dark");
    image.setAttribute("src", "chucknorris.jpeg");
    image.setAttribute("alt", "game image");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.setAttribute("class", "card-body");

    const text = document.createElement("p");
    text.innerText = result.value;
    text.setAttribute("class", "card-text");

    cardContainer.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(text);

}
  
