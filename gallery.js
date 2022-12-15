const imgNameArr = [
  "wadu",
  "tuh1c",
  "tfya",
  "slww",
  "c5",
  "beach",
  "2x2",
  "bwy1",
  "1b1",
  "gr",
  "longh",
  "boardg",
  "bop",
  "cat14f",
  "vb",
  "zzch",
  "bball",
  "nt2",
  "newton",
  "newton14",
  "siwp",
  "slww",
  "fac",
  "mask",
  "cat1",
  "k2sz",
  "y",
  "sitt",
  "e91j",
  "smile",
  "colrized3",
  "car",
];

const galleryContainer = document.querySelector(".row");

const appendImg = (imgUrl) => {
  const div = document.createElement("div");
  div.classList.add("col-4");
  div.classList.add("py-3");
  const image = document.createElement("img");
  image.src = `assets/${imgUrl}.jpg`;
  image.classList.add("rounded");
  image.classList.add("img-fluid");
  div.appendChild(image);
  galleryContainer.appendChild(div);
};

for (let url of imgNameArr) {
  appendImg(url);
}
