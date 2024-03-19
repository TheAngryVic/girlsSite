import { db, Brands, Categories, Products } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO

	await db.insert(Brands).values([
		{ name: 'Apple',uid: 1 },
		{ name: 'Samsung',uid: 2 },
		{ name: 'Xiaomi',uid: 3 },
		{ name: 'LG',uid: 4 },
	])
	await db.insert(Categories).values([
		{ name: 'Smartphone',uid: 1 },
		{ name: 'Laptop',uid: 2 },
		{ name: 'Tablet',uid: 3 },
		{ name: 'Smartwatch',uid: 4 },
	])

	
}
