export class OrderNotFoundError extends Error {
  constructor() {
    super('Order not found!');
  }
}
