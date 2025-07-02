import Cart from "../Cart";
import { Buyable } from "../domain/Buyable";

describe("Cart", () => {
  let cart: Cart;
  const book1: Buyable = {
    id: 1,
    name: "Война и Мир",
    price: 530,
    isCountable: true,
  };
  const book2: Buyable = {
    id: 2,
    name: "Преступление и наказание",
    price: 480,
    isCountable: true,
  };
  const movie1: Buyable = {
    id: 3,
    name: "Онлайн фильм Гарри Поттер и филосовский камень",
    price: 150,
    isCountable: false,
  };

  beforeEach(() => {
    cart = new Cart();
    cart.add(book1);
    cart.add(book2);
    cart.add(movie1);
  });

  test("добавили товары и проверяем содержимое корзины", () => {
    expect(cart.products.length).toBe(3);
    expect(cart.products[0].product).toEqual(book1);
    expect(cart.products[0].quantity).toBe(1);
  });

  test("добавляем товар повторно, ловим ошибку", () => {
    cart.add(book1);
    expect(cart.products[0].quantity).toBe(2);
    expect(() => cart.add(movie1)).toThrow(
      "Товар уже есть, добавить второй нельзя",
    );
  });

  test("уменьшаем количество товара, которого можно уменьшить и которого уменьшить нельзя", () => {
    cart.add(book2);
    expect(cart.products[1].quantity).toBe(2);
    cart.decrease(2);
    expect(cart.products[1].quantity).toBe(1);
    // Уменьшаем book2 до нуля, ожидаем метода remove -
    // удаление book2 из объекта cart
    cart.decrease(2);
    expect(cart.products.length).toBe(2);
    // пытаемся уменьшить объект, который уменьшить нельзя
    expect(() => cart.decrease(3)).toThrow(
      "Товар либо не добавлен, либо его нельзя уменьшить",
    );
  });

  test("Проверяем вывод суммы без скидки", () => {
    expect(cart.getTotalPrice()).toBe(1160);
  });

  test("Проверяем функцию remove и за одно исключение в функции getTotalPrice", () => {
    cart.remove(1);
    expect(cart.products.length).toBe(2);
    cart.remove(2);
    cart.remove(3);
    expect(() => cart.getTotalPrice()).toThrow("Список товаров пуст");
  });

  test("Считаем сумму с учетом скидки", () => {
    expect(cart.getTotalPriceWithDiscount(10)).toBe(1044);
  });
});
