const data = require('./data');

// const cartOutputDiv = document.getElementById('cart');

const printCartToDom = () => {
  const cartItems = data.getCart();
  console.log('cartItems: ', cartItems);
};

module.exports = printCartToDom;
