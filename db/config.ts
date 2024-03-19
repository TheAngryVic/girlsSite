import { column, defineDb, defineTable } from 'astro:db';

 const Categories = defineTable({
  columns: {
    uid: column.number({ primaryKey: true }),
    name: column.text(),
  }
});
 const Brands = defineTable({
  columns: {
    uid: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

 const Products = defineTable({
  columns: {
    uid: column.text({ primaryKey: true }),
    name: column.text(),
    price: column.number(),
    quantity: column.number(),
    stock: column.boolean(),
    categoriesFk: column.number({ references: () => Categories.columns.uid }),
    brandsFk: column.number({ references: () => Brands.columns.uid }),
  }
});


export default defineDb({
  tables: {Categories,Brands,Products}
});
