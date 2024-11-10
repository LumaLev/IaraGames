let variavel = "dhujbadjhbawjdb" //valor pode mudar e NÃO pode existir mais de uma com o mesmo nome
var variavel2 = "ndajkhbdwjabh" //valor pode mudar e pode existir mais de uma com o mesmo nome
const variavel3 = 3 //valor não muda
let lista = [] //[] = lista que recebe varios valores, ex: [2,3,4,5,6,7]
let objeto = {} // {} = objeto que possui atributos (caracteristicas), ex: {""}

const jsonDados = [
    { //lista de dados - SEMPRE CONSTANTE
    "id":"#6548",
    "jogo":"Call of Duty",
    "data":"12/12/2023",
    "preco":"R$220,00",
    "metodo":"Crédito",
    "status":"Concluído"
   }, 
   {
    "id":"#6548",
    "jogo":"Battlefield",
    "data":"12/11/2023",
    "preco":"R$220,00",
    "metodo":"Débito",
    "status":"Concluído"

   }, 
   {
    "id":"#6548",
    "jogo":"Mario Bros",
    "data":"11/11/2023",
    "preco":"R$220,00",
    "metodo":"Crédito",
    "status":"Concluído"
   }, 
   {
    "id":"#6548",
    "jogo":"Overcooked ",
    "data":"09/11/2023",
    "preco":"R$220,00",
    "metodo":"Débito",
    "status":"Concluído"
   }, 
   {
    "id":"#6548",
    "jogo":"Roblox",
    "data":"09/11/2023",
    "preco":"R$220,00",
    "metodo":"Crédito",
    "status":"Concluído"
   }, 
   {
    "id":"#6548",
    "jogo":"Overwatch",
    "data":"09/11/2023",
    "preco":"R$227,00",
    "metodo":"Crédito",
    "status":"Concluído"
   }, 
   {
    "id":"#6548",
    "jogo":"GTA",
    "data":"09/11/2023",
    "preco":"R$222,00",
    "metodo":"Débito",
    "status":"Concluído"

   }, 
   {
    "id":"#6548",
    "jogo":"Rust",
    "data":"09/11/2023",
    "preco":"R$210,00",
    "metodo":"Crédito",
    "status":"Concluído"

   },
   {
    "id":"#6548",
    "jogo":"Halo",
    "data":"09/11/2023",
    "preco":"R$210,00",
    "metodo":"Crédito",
    "status":"Concluído"
   }, 

   {
    "id":"#6548",
    "jogo":"Batman",
    "data":"09/11/2023",
    "preco":"R$190,00",
    "metodo":"Débito",
    "status":"Concluído"
   }, 

   {
    "id":"#6548",
    "jogo":"Lego Batman",
    "data":"09/11/2023",
    "preco":"R$190,00",
    "metodo":"Débito",
    "status":"Concluído"
   }, 

   {
    "id":"#6548",
    "jogo":"Fallout",
    "data":"09/11/2023",
    "preco":"R$190,00",
    "metodo":"Débito",
    "status":"Concluído"
   }, 

   {
    "id":"#6548",
    "jogo":"Assassin's Creed",
    "data":"09/11/2023",
    "preco":"R$190,00",
    "metodo":"Débito",
    "status":"Concluído"
   }, 

   {
    "id":"#6548",
    "jogo":"Forza Horizon",
    "data":"09/11/2023",
    "preco":"R$190,00",
    "metodo":"Dédito",
    "status":"Concluído"
   }, 

   
]

document.addEventListener("DOMContentLoaded", ()=> {
    let table = document.querySelector(".table-bg")
    console.log(table);
    
    let tbody = table.querySelector("tbody")  
    console.log(tbody);
    
    for(let i = 0; i < jsonDados.length; i++){
            
        tbody.innerHTML += `
        <tr class="white">
           <th scope="row" class="text-amarelo">${jsonDados[i].id}</th>
           <td>${jsonDados[i].jogo}</td>
           <td>${jsonDados[i].data}</td>
           <td>${jsonDados[i].preco}</td>
           <td>${jsonDados[i].metodo}</td>
           <td class="status">
                <p class="status-bg">${jsonDados[i].status}</p>
           </td>
        </tr>
        ` 
        ""
        ''
    }
})

// const animais = [
//     cachorro = {"tosa":"150", "banho":"20"},
//     gato = {"tosa":"12", "banho":"50"}
// ]


// console.log("Numero: "+i)
// console.log('Numero: '+i)

// console.log(`Numero: ${i}`)

// let i=0
// if(i == 0){
//     console.log("oi Luma")
// }

// while(i == 10){
//     i++
//     console.log(i)   
// }

// for(let i=1; i<=10; i+=2){ //i+=2 = i=i+2
//     console.log(i);
// }