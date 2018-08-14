import cartReducer from "./cartReducer";

describe('cart reducer', () => {
    const initialstate = {
        items: []
    }

    it('should handle addtocart action', () => {
        expect(cartReducer(initialstate, { type: 'ADDTOCART', productId: 'cat' })).toEqual({ items: ['cat'] });
    })
})
