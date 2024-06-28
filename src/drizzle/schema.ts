
import{ pgTable,pgEnum,serial,text,integer,timestamp,decimal,boolean,primaryKey,varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
//Books table
export const tableBooks = pgTable("Books",{
id: serial("id").primaryKey(),
author: text("author"),
title: text("title"),
publicationyear: integer("publication year")

});

//authors table
export const tableauthors = pgTable("authors",{
    id: serial("id").primaryKey(),
    author: text("author"),
    
    
    });
    

export type tiBooks=typeof tableBooks.$inferInsert;
export type tsBooks=typeof tableBooks.$inferSelect;


export type tiauthors=typeof tableauthors.$inferInsert;
export type tsauthors=typeof tableauthors.$inferSelect;



// export type tiState=typeof tableState.$inferInsert;

// export type tsState=typeof tableState.$inferSelect;
// export type tsbooks=typeof tablebooks.$inferSelect;
// export type TIAuthOnUser = typeof AuthOnTableUsers.$inferInsert;
// export type TSAuthOnUser = typeof AuthOnTableUsers.$inferSelect;

// //city table
// export const tableCity = pgTable("city",{
//     id: serial("id").primaryKey(),
//     name: text("name"),
//     address: text("address"),
//     state_id:integer("state_id").notNull().references(() =>tableState.id,{onDelete:"cascade"})
//     });

//     //restaurant table
//     export const tableRestaurant = pgTable("restaurant",{
//         id: serial("id").primaryKey(),
//         name: text("name"),
//        street_address: text("street_address"),
//         zip_code:text("zip_code"),
//         created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//         updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
//         city_id:integer("city_id").notNull().references(() =>tableCity.id,{onDelete:"cascade"})
//         });

//         //category table
//         export const tableCategory = pgTable("category",{
//             id: serial("id").primaryKey(),
//             name: text("name")
//             });

//         //menu_item table
//         export const tableMenuItem = pgTable("menu_item",{
//             id: serial("id").primaryKey(),
//             name: text("name"),
//             description:text("description"),
//             ingredients:text("ingredients"),
//             price:decimal("price"),
//             active:boolean("active"),
//             created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//             updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
//             restaurant_id:integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"}),
//             category_id: integer("category_id").notNull().references(() =>tableCategory.id,{onDelete:"cascade"})
//             });

//             //status_catalog table
//             export const tableStatusCatalog = pgTable("status_catalog",{
//                 id: serial("id").primaryKey(),
//                 name: text("name")
//                 });

//              //users table
//              export const tableUsers = pgTable("users",{
//                 id: serial("id").primaryKey(),
//                 name: text("name"),
//                 contact_phone:text("contact_phone"),
//                 phone_verified:boolean("phone_verified"),
//                 email:varchar("email"),
//                 email_verified:boolean("email_verified"),
//                 confirmation_code:text(" confirmation_code"),
//                 password:varchar("password"),
//                 created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//                 updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow()
//                 });

//                 //driver table
//                 export const tableDriver= pgTable("driver",{
//                     id: serial("id").primaryKey(),
//                     car_make: text("car_make"),
//                     car_model:text("car_model"),
//                     car_year:integer("car_year"),
//                     online:boolean("online"),
//                     delivering:boolean("delivering"),
//                     created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//                 updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
//                     user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"})
//                     });

//               //restaurant_owner table
//               export const tableRestaurantOwner = pgTable("restaurant_owner",{
//                 id: serial("id").primaryKey(),
//                 owner_id:integer("owner_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
//                 restaurant_id: integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"})
//                 });

//             //address table
//             export const tableAddress = pgTable("address",{
//                 id: serial("id").primaryKey(),
//                 street_address_1: text("street_address_1"),
//                 street_address_2: text("street_address_2"),
//                 zip_code:text("zip_code"),
//                 delivery_instructions:text("delivery_instructions"),
//                 created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//                 updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
//                 user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
//                 city_id:integer("city_id").notNull().references(() =>tableCity.id,{onDelete:"cascade"})
//                 });

//                 //orders table
//                 export const tableOrders = pgTable("orders",{
//                     id: serial("id").primaryKey(),
//                     estimated_delivery_time: timestamp("estimated_delivery_time"),
//                     actual_delivery_time: timestamp("actual_delivery_time"),
//                     price: decimal("price"),
//                     discount:decimal("discount"),
//                     final_price:decimal("final_price"),
//                     comment:text("comment"),
//                     created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//                     updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
//                     restaurant_id:integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"}),
//                     delivery_address_id:integer("delivery_address_id").notNull().references(() =>tableAddress.id,{onDelete:"cascade"}),
//                     user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
//                     driver_id:integer("driver_id").notNull().references(() =>tableDriver.id,{onDelete:"cascade"})
//                     });

//                     //order_status table
//                     export const tableOrderStatus= pgTable("order_status",{
//                         id: serial("id").primaryKey(),
//                         created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//                         // updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
//                         order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
//                         status_catalog_id: integer("status_catalog_id").notNull().references(() =>tableStatusCatalog.id,{onDelete:"cascade"})
//                         });

//                     // comment table
//                     export const tableComment = pgTable("comment",{
//                         id: serial("id").primaryKey(),
//                         comment_text:text("comment_text"),
//                         is_complaint:boolean("is_complaint"),
//                         is_praise:boolean("is_praise"),
//                         created_at:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
//                         updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
//                         order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
//                         user_id: integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"})
//                         });
//                     //order menu item
//                     export const tableOrderMenuItem = pgTable("order_menu_item",{
//                         id: serial("id").primaryKey(),
//                         quantity:integer("quantity"),
//                         item_price:decimal("item_price"),
//                         price:decimal("price"),
//                         order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
//                         menu_item_id: integer("menu_item_id").notNull().references(() =>tableMenuItem.id,{onDelete:"cascade"})
//                         });

                       

//                         // Relationship:  state-city
//                         export const state_city = relations(tableState, ({ one}) => ({
//                           city: one(tableCity, {
//                             fields: [tableState.id],
//                             references: [tableCity.state_id],
//                           })
//                         }));
                        
//                          // Relationship:  city-state(1-*) city-restaurant city-address
//                         export const state_cities = relations(tableCity, ({ many,one }) => ({
//                           state: many(tableState),
//                           restaurants: one(tableRestaurant, {
//                             fields: [tableCity.id],
//                             references: [tableRestaurant.city_id]}),
//                             address: one(tableAddress, {
//                               fields: [tableCity.id],
//                               references: [tableAddress.city_id] })
//                           })
//                         );
                        
//                         // Relationship: Restaurant - city(*-1) restaurant - menu_item (1-*)
//                         export const restaurant_city = relations(tableRestaurant, ({ many,one}) => ({
//                           city: many(tableCity  ),
//                           rastaurant_owner: one(tableRestaurantOwner, {
//                             fields: [tableRestaurant.id],
//                             references: [tableRestaurantOwner.restaurant_id],
//                           }),
//                           menu_item: one(tableMenuItem, {
//                             fields: [tableRestaurant.id],
//                             references: [tableMenuItem.restaurant_id],
//                           }),
//                           orders: one(tableOrders, {
//                             fields: [tableRestaurant.id],
//                             references: [tableOrders.restaurant_id],
//                           })
//                         }));
                        
//                         // Relationship: Address - address(1-1)
//                         export const address_city = relations(tableAddress, ({ many,one }) => ({
//                           city: many(tableCity),
//                           users:many(tableUsers),
//                           orders: one(tableOrders, {
//                             fields: [tableAddress.id],
//                             references: [tableOrders.delivery_address_id],
//                           })
//                         }));
                        
//                      //relationship   menu_item 
//                      export const menu_item_restaurant= relations(tableMenuItem, ({ many ,one}) => ({
//                       restaurants: many(tableRestaurant),
//                       category:many(tableCategory),
//                       order_menu_item: one(tableOrderMenuItem, {
//                         fields: [tableMenuItem.id],
//                         references: [tableOrderMenuItem.menu_item_id],
//                       })
//                     }));
//                     //relationship category
//                     export const category_menuItem =relations(tableCategory,({one})=>({
//                       menu_item:one(tableMenuItem,{
//                         fields:[tableCategory.id],
//                         references:[tableMenuItem.category_id]
//                       })
//                     }))
//                 //relationship orders_menu_item 
//                 export const ordermenuItem =relations(tableOrderMenuItem,({many})=>({
//                   orders:many(tableOrders),
//                   menu_item:many(tableMenuItem)
//                 }))

//                 //relationship users
//                 export const users= relations(tableUsers, ({ one}) => ({
//                   rastaurant_owner: one(tableRestaurantOwner, {
//                     fields: [tableUsers.id],
//                     references: [tableRestaurantOwner.owner_id],
//                   }),
//                   orders: one(tableOrders, {
//                     fields: [tableUsers.id],
//                     references: [tableOrders.user_id],
//                   }),
//                   address: one(tableAddress, {
//                     fields: [tableUsers.id],
//                     references: [tableAddress.user_id],
//                   }),
//                   driver: one(tableDriver, {
//                     fields: [tableUsers.id],
//                     references: [tableDriver.user_id],
//                   }),
//                   comment: one(tableComment, {
//                     fields: [tableUsers.id],
//                     references: [tableComment.user_id],
//                   })
//                 }));

//                //relationship restaurant_owner (1-*)
//                export const restaurantOwner =relations(tableRestaurantOwner,({many})=>({
//                 users:many(tableUsers),
//                 restaurant:many(tableRestaurant)
//               }))

//              //relationship order
//              export const order= relations(tableOrders, ({ one,many}) => ({
//               order_menu_item: one(tableOrderMenuItem, {
//                 fields: [tableOrders.id],
//                 references: [tableOrderMenuItem.menu_item_id],
//               }),
//               order_status: one(tableOrderStatus, {
//                 fields: [tableOrders.id],
//                 references: [tableOrderStatus.order_id],
//               }),
//               comment: one(tableComment, {
//                 fields: [tableOrders.id],
//                 references: [tableComment.order_id],
//               }),
//               driver: many(tableDriver),
//               users: many(tableUsers),
//               address: many(tableAddress),
//               restaurant: many(tableRestaurant)
             
//             }));

//             //relationship driver
//             export const driver= relations(tableDriver, ({ one,many}) => ({
//               users:many(tableUsers),
//               orders: one(tableOrders, {
//                 fields: [tableDriver.id],
//                 references: [tableOrders.driver_id],
//               })
//             }));

//          //relationship comments 
//          export const comments= relations(tableComment, ({ many}) => ({
//           users:many(tableUsers),
//           orders: many(tableOrders)
//         }));

//          //relationship order_status 
//          export const orderStatus= relations(tableOrderStatus, ({ one,many}) => ({
//           orders:many(tableOrders),
//           status_catalog: many(tableStatusCatalog)
//         }));
//              //relationship  status_catalog 
//              export const statusCatalog= relations(tableStatusCatalog, ({ one}) => ({
//               order_status: one(tableOrderStatus, {
//                 fields: [tableStatusCatalog.id],
//                 references: [tableOrderStatus.status_catalog_id],
//               })
//             }));

//             export const roleEnum = pgEnum("role", ["admin", "user"])

//             export const AuthOnTableUsers = pgTable("auth_on_users", {
//                 id: serial("id").primaryKey(),
//                 userId: integer("user_id").notNull().references(() => tableUsers.id, { onDelete: "cascade" }),
//                 password: varchar("password", { length: 100 }),
//                 email: varchar("email", { length: 100 }),
//                 role: roleEnum("role").default("user")
//             });
            
//             export const AuthOnUsersRelations = relations(AuthOnTableUsers, ({ one }) => ({
//                 user: one(tableUsers, {
//                     fields: [AuthOnTableUsers.userId],
//                     references: [tableUsers.id]
//                 })
//             }));
                    
