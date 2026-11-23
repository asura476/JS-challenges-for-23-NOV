import { produits } from "./DATA.js";

const product = produits.filter(produit => produit.stock > 0)
console.log(product)
console.log('-----------------------------------------------')
const productCategorie = produits.filter(produit => produit.categorie == 'Papeterie' && produit.stock > 0)
console.log(productCategorie)