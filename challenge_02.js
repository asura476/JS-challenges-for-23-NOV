import { boutique } from "./DATA.js";

console.log(`la ville est ${boutique.ville}`)

boutique.devise = 'MAD'

boutique.ouverte = false
if(boutique.ouverte == false){
    console.log('le store est fermee')
}
else{console.log('le store est ouvert')}
console.log(boutique)