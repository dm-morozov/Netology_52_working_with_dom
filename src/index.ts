// index.ts

/* eslint-disable no-console */

import { getAvailableProducts, getTotalPrice, products } from "./ts/task1";
console.log(getAvailableProducts(products));
console.log("Общая цена всех товаров:", getTotalPrice(products));

import Cart from "./ts/Cart";
const cart = new Cart();
cart.add({
  id: 1,
  name: "Война и Мир",
  price: 530,
  isCountable: true,
});
cart.add({
  id: 2,
  name: "Преступление и наказание",
  price: 480,
  isCountable: true,
});
cart.add({
  id: 3,
  name: "Онлайн фильм Гарри Поттер и филосовский камень",
  price: 150,
  isCountable: false,
});
console.log("Массив товаров:", cart.products);
console.log("Массив товаров:", cart.products.length);
console.log(cart.getTotalPrice());
console.log(cart.getTotalPriceWithDiscount(10));
cart.remove(1);
console.log("Массив товаров:", cart.products);
