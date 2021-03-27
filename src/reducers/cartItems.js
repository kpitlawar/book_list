const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'AddBook_To_Cart':
            return [...state, action.payload]
        case 'RemoveBook_From_Cart':
            return state.filter(cartItem => cartItem.id !== action.payload.id)
    }

    return state
}

export default cartItems