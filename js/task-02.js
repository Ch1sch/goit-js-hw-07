const images = [
  {
    src: "/img/src/pc.jpg",
    alt: 'Project planning',
  },
  {
    src: "/img/src/lamp.jpg",
    alt: 'Light',
  },
  {
    src: "/img/src/phone.jpg",
    alt: 'Phone on the table',
  },
  {
    src: "/img/src/room.jpg",
    alt: 'Conference room',
  },
  {
    src: "/img/src/hall.jpg",
    alt: 'Studio room',
  },
  {
    src: "/img/src/work.jpg",
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
