import { db, Products, eq, Brands, Categories } from 'astro:db';


export function getProducts() {
  return db.select({
    uid: Products.uid,
    name: Products.name,
    price: Products.price,
    quantity: Products.quantity,
    stock: Products.stock,
    categoriesFk: Categories.name,
    brandsFk: Brands.name   
  
  }).from(Products).leftJoin(Brands, eq(Products.brandsFk, Brands.uid)).leftJoin(Categories, eq(Products.categoriesFk, Categories.uid));    
}