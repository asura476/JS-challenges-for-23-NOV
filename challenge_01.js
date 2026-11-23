import { categories } from "./DATA.js";
//01
console.log(`la premiere categorie est ${categories[0]} et le nombre initial des categorie est ${categories.length}`)


categories.push('Classement')
categories[categories.indexOf('Accessoires')] = 'Bureau'

categories.pop()

console.log(categories)