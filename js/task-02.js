const images = [
  {
    src: "./img/project.png",
    alt: 'Project planning',
  },
  {
    src: "./img/lamp.png",
    alt: 'Light',
  },
  {
    src: "./img/phone.png",
    alt: 'Phone on the table',
  },
  {
    src: "./img/room.png",
    alt: 'Conference room',
  },
  {
    src: "./img/hall.png",
    alt: 'Studio room',
  },
  {
    src: "./img/work.png",
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
