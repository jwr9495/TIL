//ES5

const computer = {
  model: "macbook-pro",
  year: 2017,
  price: 400
};

// const model = computer.model;
// const year = computer.year;
// const price = computer.price;

//ES6
const labtop = {
  model: "gram",
  year: 2018,
  price: 100
};

// const model = labtop.model;
// const year = labtop.year;
// const price = labtop.price;
const { model, year, price } = labtop;

//실제로는?
//ES5
const tag = `<h1>this${labtop.model} of <h1>this${labtop.year} of <h1>this${labtop.price}`;
console.log(tag);
//ES6
const newTag = `<h1>this is ${model} of ${year} of ${price}`;

const labtops = [
  { model: "gram", year: 2010, price: 250 },
  { model: "mac-pro", year: 2015, price: 450 },
  { model: "pen-s", year: 2000, price: 350 }
];

labtops.map(({ model }) => {
  return `<h1>${model}</h1>`;
});
