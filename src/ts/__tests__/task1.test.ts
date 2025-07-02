import { getAvailableProducts, getTotalPrice, Product } from "../task1";

const testProducts: Product[] = [
  { id: 1, title: "Товар 1", price: 100, inStock: true },
  { id: 2, title: "Товар 2", price: 200, inStock: false },
  { id: 3, title: "Товар 3", price: 300, inStock: true },
];

describe("Product utilities", () => {
  test("getAvailableProducts возвращает только товары в наличии", () => {
    const result = getAvailableProducts(testProducts);
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.inStock)).toBe(true);
  });

  test("getTotalPrice возвращает сумму всех цен", () => {
    const total = getTotalPrice(testProducts);
    expect(total).toBe(600);
  });

  test("getAvailableProducts выбрасывает ошибку при пустом массиве", () => {
    expect(() => getAvailableProducts([])).toThrow("Список товаров пуст");
  });

  test("getTotalPrice выбрасывает ошибку при пустом массиве", () => {
    expect(() => getTotalPrice([])).toThrow("Список товаров пуст");
  });
});
