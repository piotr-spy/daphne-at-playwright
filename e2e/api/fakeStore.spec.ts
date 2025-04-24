import { expect, test } from '@playwright/test';

test.describe('Fake Store API Tests', () => {

    test('Get all products and validate response', async ({ request }) => {
        const response = await request.get('https://fakestoreapi.com/products')
        const products = await response.json()
        
        await expect(response).toBeOK()
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
})