const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const itemGalleryEl = document.querySelector('.gallery');

const createImagesItems = ({ url, alt }) => `<li><img src="${url}" width="200"  alt="${alt}"></img></li>`;

const imagesEl = images.map(createImagesItems).join("");

itemGalleryEl.insertAdjacentHTML("afterbegin", imagesEl);


itemGalleryEl.style.display = "flex";
itemGalleryEl.style.gap = "100px";