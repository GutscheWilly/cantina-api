export type ProductRestrictionRepositoryData = {
  id: number,
  productId: number,
  studentId: number
}

export interface IProductRestrictionRepository {
  create(studentId: number, productId: number): Promise<ProductRestrictionRepositoryData>
}
