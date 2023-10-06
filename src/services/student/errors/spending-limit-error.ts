export class SpendingLimitError extends Error {
  constructor() {
    super('Spending limit should be a positive value!');
  }
}
