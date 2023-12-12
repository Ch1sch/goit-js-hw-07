const images = [
  {
    src: "/images/pc.jpg",
    alt: 'Project planning',
  },
  {
    src: "/images/lamp.jpg",
    alt: 'Light',
  },
  {
    src: "/images/phone.jpg",
    alt: 'Phone on the table',
  },
  {
    src: "/images/room.jpg",
    alt: 'Conference room',
  },
  {
    src: "/images/hall.jpg",
    alt: 'Studio room',
  },
  {
    src: "/images/work.jpg",
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
