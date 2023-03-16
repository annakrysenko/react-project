export const data = [
  {
    title: 'Lorem, ipsum dolor ',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
    rating: randomInteger(1, 5),
    id: randomInteger(1, 9999),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
    rating: randomInteger(1, 5),
    id: randomInteger(1, 9999),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
    rating: randomInteger(1, 5),
    id: randomInteger(1, 9999),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
    rating: randomInteger(1, 5),
    id: randomInteger(1, 9999),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
    rating: randomInteger(1, 5),
    id: randomInteger(1, 9999),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
    rating: randomInteger(1, 5),
    id: randomInteger(1, 9999),
  },
];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
