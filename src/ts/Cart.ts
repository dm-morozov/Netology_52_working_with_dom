// Cart.ts

import { Buyable } from "./domain/Buyable";

type CartItem = {
  product: Buyable;
  quantity: number;
};

export default class Cart {
  private _products: CartItem[] = [];

  add(item: Buyable): void {
    const existing = this._products.find((el) => el.product.id === item.id);

    if (existing) {
      if (item.isCountable) {
        existing.quantity++;
      } else {
        throw new Error("Товар уже есть, добавить второй нельзя");
      }
    } else {
      this._products.push({ product: item, quantity: 1 });
    }
  }

  get products(): CartItem[] {
    return [...this._products];
  }

  getTotalPrice(): number {
    let totalPrice: number = 0;

    if (this._products.length === 0) {
      throw new Error("Список товаров пуст");
    }

    for (const item of this._products) {
      totalPrice += item.product.price * item.quantity;
    }

    return totalPrice;
  }

  getTotalPriceWithDiscount(discount: number): number {
    const totalPrice = this.getTotalPrice();
    const discountAmount = (totalPrice * discount) / 100;
    return totalPrice - discountAmount;
  }

  remove(id: number): void {
    this._products = this._products.filter((item) => item.product.id !== id);
  }

  decrease(id: number): void {
    const existing = this._products.find((el) => el.product.id === id);

    if (existing && existing.product.isCountable) {
      existing.quantity--;
      if (existing.quantity <= 0) {
        this.remove(id);
      }
    } else {
      throw new Error("Товар либо не добавлен, либо его нельзя уменьшить");
    }
  }
}
