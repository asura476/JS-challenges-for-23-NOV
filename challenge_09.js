import { produits } from "./DATA.js";
let productPrice = produits.every(produit => produit.prix > 0)
console.log(productPrice
)

let productStock = produits.every(produit => produit.stock > 0)
console.log(productStock)