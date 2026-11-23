import { produits } from "./DATA.js";
const total = produits.reduce((acc, produit) => acc + produit.stock, 0)

const totalStock = produits.reduce((acc, produit) => acc + produit.prix * produit.stock, 0)

console.log(`le nombre total d'unite est ${total} est la valeur total du stock est ${totalStock}`)

