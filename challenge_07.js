import { produits } from "./DATA.js";

const produit = produits.find(produit => produit.id == 103)
console.log(produit)

const product = produits.find(produit => produit.id == 999)
console.log(product)

const produitIndex = produits.findIndex(produit => produit.id == 103)
console.log(produitIndex)

const productIndex = produits.findIndex(produit => produit.id == 999)
console.log(productIndex)