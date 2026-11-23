import { produits } from "./DATA.js";
let product = produits.filter(produit => produit.categorie == 'Papeterie' && produit.stock > 0)
const productName = product.map(produit => produit.nom)

const productTotal = product.reduce((acc, produit) => acc + produit.prix * produit.stock , 0)

console.log(`les produits du Papeterie sont ${productName} et leur valeur total est ${productTotal}DH`)
