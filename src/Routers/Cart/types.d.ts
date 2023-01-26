export type CartBody = {
    product_id: number,
    product_quantity: number,
    user_id: number,
    payment_method: string
}

export type FinishedCart = {
    cart_id: string
    payment_method: string
    user_id: string
}