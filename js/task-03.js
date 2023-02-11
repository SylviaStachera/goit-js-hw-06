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
//1. Stworzyć li>img
//2. W img dodać atrybuy url i alt z images

const galeryList = document.querySelector(".gallery");

const galeryItem = images
.map((el => `<li><img class="gallery--item" src="${el.url}" alt=${el.alt}"></li>`))
.join("");

galeryList.insertAdjacentHTML("beforeend", galeryItem);

//console.log(galeryList);
//3.Ostylować galerię 
