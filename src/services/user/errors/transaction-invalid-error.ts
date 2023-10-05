export class TransactionInvalidError extends Error {
  constructor() {
    super('Transaction invalid! There is no enough credit!');
  }
}
