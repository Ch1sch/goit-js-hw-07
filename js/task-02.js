const images = [
  {
    src: './img/1.jpg',
    alt: 'Project planning',
  },
  {
    src: './img/2.jpg',
    alt: 'Light',
  },
  {
    src: './img/3.jpg',
    alt: 'Phone on the table',
  },
  {
    src:
      './img/4.jpg',
    alt: 'Conference room',
  },
  {
    src:
      './img/5.jpg',
    alt: 'Studio room',
  },
  {
    src:
      './img/6.jpg',
    alt: 'Working place',
  },
];

const galleryElement = document.querySelector('.gallery');

        images.forEach(image => {

            const listItem = document.createElement('li');
            listItem.className = 'gallery-item';

            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;

            listItem.appendChild(imgElement);

            galleryElement.appendChild(listItem);
        });
