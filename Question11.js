function processProducts(products) {
  const productNames = products.map(product => product.name);

  products.forEach((product, index) => {
    const message = product.price > 50 ? "is above" : "is below";
    console.log(`${productNames[index]} ${message} $50`);
  });
}
const inputProducts = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(inputProducts);