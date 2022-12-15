import animals from "./animals.js";

const loadingGifURL = "https://media0.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=ecf05e47000os2gfitf98ryfa870cwc0i9ql3ouoj8gw6auv&rid=giphy.gif&ct=g"

const showNewGif = () => {
  async function fetchData(i) {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const gif = document.querySelector(`#gif${i}`);
    gif.src = loadingGifURL
    const gifTitle = document.querySelector(`#gif${i}title`);
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=0TbJSEt3p9ar47tjrLeUnX6qoFQijMeC&s=${randomAnimal}`,
      { mode: "cors" }
    );
    const obj = await response.json();
    console.log(obj);
    gifTitle.textContent = obj.data.title;
    gif.src = obj.data.images.original.url;
    gif.alt = obj.data.title;
  }

  for (let i = 1; i <= 3; i++) {
    fetchData(i);
  }
};

const btn = document.querySelector("button");
btn.addEventListener("click", showNewGif);

// showNewGif();
