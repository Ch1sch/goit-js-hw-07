const images = [
  {
    src: '/img/1.jpg',
    alt: 'Project planning',
  },
  {
    src: '/img/2.jpg',
    alt: 'Light',
  },
  {
    src: '/img/3.jpg',
    alt: 'Phone on the table',
  },
  {
    src: '/img/4.jpg',
    alt: 'Conference room',
  },
  {
    src:'/img/5.jpg',
    alt: 'Studio room',
  },
  {
    src: '/img/6.jpg',
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
