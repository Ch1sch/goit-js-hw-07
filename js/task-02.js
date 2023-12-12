const images = [
  {
    src: '/img/pc.jpg',
    alt: 'Project planning',
  },
  {
    src: '/img/lamp.jpg',
    alt: 'Light',
  },
  {
    src: '/img/phone.jpg',
    alt: 'Phone on the table',
  },
  {
    src: '/img/room.jpg',
    alt: 'Conference room',
  },
  {
    src:'/img/hall.jpg',
    alt: 'Studio room',
  },
  {
    src: '/img/work.jpg',
    alt: 'Working place',
  },
];

const galleryElement = document.querySelector('.gallery');

const imagesList = document.createElement('ul');
imagesList.className = 'gallery-list';

for (const image of images) {
  const imgElement = document.createElement('img');
  imgElement.src = image.src;
  imgElement.alt = image.alt;

  imagesList.appendChild(imgElement);
}

galleryElement.appendChild(imagesList);
