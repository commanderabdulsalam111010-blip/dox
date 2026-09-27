//document.getElementById("count").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)
function increment() {
   count +=1
 countEl.textContent = count
  
}

function save(){
  let countStr = count + " - "
  
  saveEl.textContent += countStr
countEl.textContent = 0
count = 0
console.log(count)
}

//let name = "salam"
//let greeting = "hi, my name is "
//let myGreeting = greeting + name

//console.log(myGreeting)



//console.log(countEl)
//console.log(count)





// camelCase




















//let lapsCompleted = 0
//function incre() {
// lapsCompleted =lapsCompleted + 1
 
//}
//incre()
//incre()
//incre()
//console.log(lapsCompleted)






