import { z } from 'zod'


export const stateSchema = z.object({
    name: z.string(),
    code: z.string()
})

export const citySchema = z.object({
    name: z.string(),
    state_id: z.number(),
    address: z.string()
})

export const restaurantSchema = z.object({
    name: z.string(),
    phone: z.string(),
    street_address: z.string(),
    zip_code: z.string(),
    created_at:z.string(),
    updated_at:z.string(),
    city_id:z.number()
})

export const categorySchema = z.object({
    name: z.string()
})

export const menuItemSchema = z.object({
    name: z.string(),
    description: z.string(),
    ingredients: z.string(),
    price:z.number(),
    active:z.boolean(),
    created_at:z.string(),
    updated_at:z.string(),
    restarant_id: z.number(),
    category_id:z.number()
})

export const statusCatalogSchema = z.object({
    name: z.string()
})

export const userSchema = z.object({
    name: z.string(),
    contact_phone: z.string(),
    phone_verified:z.boolean(),
    email: z.string(),
    email_verified:z.boolean(),
    confirmation_code: z.string(),
    password: z.string(),
    created_at:z.string(),
    updated_at:z.string()
})

export const driverSchema = z.object({
    car_make: z.string(),
    car_model: z.string(),
    car_year: z.number(),
    online:z.boolean(),
    delivering:z.boolean(),
    created_at:z.string(),
    updated_at:z.string(),
    user_id: z.number()
})

export const restaurantOwnerSchema = z.object({
    owner_id: z.number(),
    restaurant_id: z.number()
})

export const addressSchema = z.object({
    street_address_1: z.string(),
    street_address_2: z.string(),
    zip_code: z.string(),
    delivery_instructions: z.string(),
    created_at:z.string(),
    updated_at:z.string(),
    user_id: z.number(),
    city_id: z.number()
})

export const ordersSchema = z.object({
    estimated_delivery_time: z.string(),
    actual_delivery_time: z.string(),
    price: z.number(),
    discount: z.number(),
    final_price: z.number(),
    comment: z.string(),
    created_at:z.string(),
    updated_at:z.string(),
    restaurant_id: z.number(),
    delivery_address_id: z.number(),
    user_id: z.number(),
    driver_id: z.number()
})

export const orderStatusSchema = z.object({
    order_id: z.number(),
    status_catalog_id: z.number(),
    created_at:z.string()
})

export const commentSchema = z.object({
    comment_text: z.string(),
    is_complaint: z.boolean(),
    is_praise: z.boolean(),
    created_at:z.string(),
    updated_at:z.string(),
    order_id: z.number(),
    user_id: z.number()
})

export const orderMenuItemSchema = z.object({
    quantity: z.number(),
    item_price: z.number(),
    price: z.number(),
    order_id: z.number(),
    menu_item_id: z.number()
})


export const loginUserSchema = z.object({
     email: z.string(),
    password: z.string()
})

export const registerUserSchema = z.object({
    userId: z.number(),
    email: z.string(),
    password: z.string(),
    role: z.string().optional(),
})