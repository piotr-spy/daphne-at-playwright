import { expect, test } from '@playwright/test';
import { deletedProduct, newProduct, updatedProduct } from '../../test-data/products';

const products = {
    new: newProduct,
    updated: updatedProduct,
    deleted: deletedProduct
}

test.describe('Fake Store API Tests', () => {

    test('Get all products and validate response', async ({ request }) => {
        const response = await request.get('https://fakestoreapi.com/products')
        const products = await response.json()
        expect(response.status()).toBe(200)
        products.forEach(product => {
            expect(product).toHaveProperty('id')
            expect(product).toHaveProperty('title')
            expect(product).toHaveProperty('price')
            expect(product).toHaveProperty('description')
            expect(product).toHaveProperty('category')
            expect(product).toHaveProperty('image')
            expect(product).toHaveProperty('rating')
            expect(product.rating).toHaveProperty('rate')
            expect(product.rating).toHaveProperty('count')
            expect(product.rating.rate).toBeGreaterThanOrEqual(0)
            expect(product.rating.rate).toBeLessThanOrEqual(5)
            expect(product.rating.count).toBeGreaterThanOrEqual(0)
        })
    })

    test('Create new product and validate response @postTest', async ({ request }) => {
        const response = await request.post('https://fakestoreapi.com/products', {
            data: products.new
        })
        const product = await response.json()
        const { id, ...responseProductWithoutID } = product
        expect(response.status()).toBe(200)
        expect(product).toHaveProperty('id')
        expect(product.id).toBeGreaterThan(0)
        expect(responseProductWithoutID).toEqual(products.new)
    })

    test('Update a product and validate response @putTest', async ({ request }) => {
        const putResponse = await request.put('https://fakestoreapi.com/products/8', {
            data: products.updated
        })
        const updatedProduct = await putResponse.json()
        expect(putResponse.status()).toBe(200)
        expect(updatedProduct).toEqual(products.updated)
    })

    test('Update product property and validate response @patchTest', async ({ request }) => {
        const { id, price } = products.updated
        const expectedPatchResponse = { id, price }
        const patchResponse = await request.patch('https://fakestoreapi.com/products/8', {
            data: {
                price: products.updated.price
            }
        })
        const updatedProduct = await patchResponse.json()
        expect(patchResponse.status()).toBe(200)
        expect(updatedProduct).toEqual(expectedPatchResponse)
    })

    test ('Delete a product and validate response @deleteTest', async ({ request }) => {
        const deleteResponse = await request.delete('https://fakestoreapi.com/products/9')
        const deletedProduct = await deleteResponse.json()
        expect(deleteResponse.status()).toBe(200)
        expect(deletedProduct).toEqual(products.deleted)
    })
})