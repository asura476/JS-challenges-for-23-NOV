import { categories, produits } from "./DATA.js";

const products = []
for (let i = 0; i < produits.length; i++){
    products.push({...produits[i]})
}

for (let i = 0; i < products.length; i++){
    console.log(`le nom du produit: "${products[i].nom}" et le stock est: "${products[i].stock}"`)
}

for (let i = 0; i < products.length; i++){
    if(products[i].nom == 'Stylo'){
        products[i].stock = 6
    }
}
const gomme = {
    id: 106, nom:'Gomme', categorie: 'Papeterie', prix: 5, stock: 8
}
products.push(gomme)

console.log(products)