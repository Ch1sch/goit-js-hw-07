const images = [
  {
    src: "/pc.jpg",
    alt: 'Project planning',
  },
  {
    src: "/lamp.jpg",
    alt: 'Light',
  },
  {
    src: "/phone.jpg",
    alt: 'Phone on the table',
  },
  {
    src: "/room.jpg",
    alt: 'Conference room',
  },
  {
    src: "/hall.jpg",
    alt: 'Studio room',
  },
  {
    src: "/work.jpg",
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
