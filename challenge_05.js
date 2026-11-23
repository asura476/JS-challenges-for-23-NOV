import { produits } from "./DATA.js";

const products = produits.map(produit => produit.nom)
console.log(products)

const productsEtiquette = produits.map(produit => `${produit.nom}-${produit.prix}DH`)
console.log(productsEtiquette)