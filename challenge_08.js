import { produits } from "./DATA.js";

const produit = produits.some(produit => produit.stock > 0)
console.log(produit)