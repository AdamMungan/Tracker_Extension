

//document.getElementById("count").innerText=5
/*
let bonuspoints = 50
console.log(bonuspoints)
 bonuspoints = bonuspoints +50  
 console.log(bonuspoints)
 bonuspoints= bonuspoints-75
 console.log(bonuspoints)
 bonuspoints= bonuspoints+50
 console.log(bonuspoints)
 */

 //function increment(){  console.log("you pressed me ")}
/*
 function countdown(){

    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
 }

 countdown()*/
/*
 let laps = 0

 function addplus() {
   laps = laps+1
 }
 
 addplus()
 addplus()
 addplus()
 console.log(laps)
 */
/*
let counta = document.getElementById("count")
 console.log(counta)

 let count = 0

 function increment(){
   count = count + 1
   counta.innerText = count
    
 }
 
 function saveit() 
 {
   console.log(count)
 } */
 
 /*
let username = "adam"
 let message = "you have three new notifications"

 let messageToUser = message + " " + username 
 console.log(messageToUser)*/
 /*


let welcomeel = document.getElementById("welcome-el")


 let name ="adam"
 let greeting = "welcome to jumanji"


 welcomeel.innerText= greeting+" "+name
 welcomeel.innerText+= "👍"*/


  /*     increase and save
let saveEl = document.getElementById("saveel")
let counta = document.getElementById("count")
let count = 0

function increment(){

  count+=1 
  counta.textContent = count
}

function saveit(){
  console.log(count)
let countstr= count + "- "
  saveEl.textContent +=countstr 
  count= 0
  counta.textContent = 0
  
}
*/
/* 
let mypoints = 3

function addpoints(){
  mypoints+= 3
}

function remove1point(){

  mypoints -=1
}
addpoints()
addpoints()
addpoints()
remove1point()
remove1point()

console.log(mypoints)*/
/* 
let errorParagraph = document.getElementById("error")
function purchase(){

  console.log("button clicked")
  errorParagraph.textContent= "something went wrong"
}*/

/* 

let num1 = 6
let num2 = 8
 document.getElementById("number-1").textContent = num1
 document.getElementById("number-2").textContent= num2
 document.getElementById("sum") = sum



  function add(){
    sum.textContent = num1 + num2
  }
  function sub(){
    sum.textContent = num1 - num2
  }  function divide(){
    sum.textContent = num1 / num2
  }  function multiply(){
    sum.textContent = num1 * num2
  }*/
/* 
  let firstcard = 22
  let secondcard = 5
  let sum = firstcard + secondcard
  console.log(sum)
  if (sum <21) {
    console.log("nah,again")
  }
  else if(sum===21 ){
    console.log("yay")
  }
   else if(sum >=21 ){
       console.log("LOL")
   }*/



/* 


let cards = [7,4]
cards.pop (7)


console.log(cards)
*/


/*
let count = [
"1",
"2",
"3",
"4",
"5",
"6",
"7"]

for (i = 0; i < count.length ; i++){
console.log(count[i])
}*/
/*
let sentence = ["hi","my","name","is","adam"]
let greetingEl = document.getElementById("greeting-el")

for (i=0 ; i< sentence.length ; i++){
  greetingEl.textContent+= sentence[i]+" "

  console.log(greetingEl)
}*/
/* 

*/
/*
let time1= 102
let time2=3

function totaltime(){
  
  return time1+time2
}

console.log(totaltime())*/
/*
let hassolvedchallenge = false
let hashintsleft= false

if ( hashintsleft === false && hassolvedchallenge === false){
showsolution()
}
function showsolution(){
  console.log("the solution is you")
}
*/



/*
let airbnb = {
  name: "castle", 
  bathroom: false,
  price: 190,
  rooms: ["double","triple"]

}

console.log(airbnb.name, airbnb.bathroom)


*/
/*
let person = {
  country: "turkey",
  name:"adam",
  age:22
}

function LogData(){
  console.log (person.name+" is a "+person.age+" year old and lives in "+ person.country) 
}
LogData()
*/
/*
let age = 68

if(age < 6 ){
  console.log("free")
}
else if ( age < 17 ){

  console.log("child discount")
}
else if ( age < 26 ){
  console.log("student discount")
}
else if(age < 66){
  console.log("full price")

}
else if(age>66){
  console.log("senior discount")

}
*/
/*
let largeCountries=["china","india", "usa", "indonesia", "pakistan"]
for(i=0; i<largeCountries.length; i++){
  console.log("- "+largeCountries[i])
}
*/
/*
let largeCountries=["tuvalu","india", "usa", "indonesia", "monaco"] 
largeCountries.pop()
largeCountries.push("pakistan")
largeCountries.shift()
largeCountries.unshift("china")


console.log(largeCountries)
*/
/*

let dayofmonth = 13
let weekday= "friday"

if (dayofmonth=== 13 && weekday === "friday"){
  console.log("OOOOOOWWWWW")
}
else {
  console.log("yaaay")
}
*/
/*

let hands= ["rock","paper","scissors"]


console.log(hands[Math.floor(Math.random() * hands.length)])
*/

/*
let fruit = ["orange","apple","orange","apple","orange"
]
let appleshelf = document.getElementById("apple-shelf")
let orangeshelf = document.getElementById("orange-shelf")

  for (i = 0; i < fruit.length; i++){
    if (fruit[i]=== "orange")
      {orangeshelf.textContent += "orange"+ " " }
    else if (fruit[i]=== "apple")
      
      appleshelf.textContent += "apple" + " " 
  }*/


/*
 let inputbtn = document.getElementById("input-btn")

 inputbtn.addEventListener("click", function(){

  console.log("button has been clicked")
 })
*/
/*
let boxel = document.getElementById("box")

boxel.addEventListener("click", function(){
  console.log("open box")
})*/

//let std = localStorage.getItem("amazon")
//console.log(std)
/*
let myLeads = `["awesomeland"]`
myLeads = JSON.parse(myLeads) 
myLeads.push("neverland")
myLeads = JSON.stringify(myLeads)

console.log(myLeads)
*/
/*
const  welcomeel = document.getElementById("welcome-el")

function greeting(ad , selam){
  welcomeel.textcontent = `${selam},${ad} +XD  ` 
}
greeting(ad ="Adam" ,selam = "howdy")
*/


function getFirst(arr){
  return arr[0]
}

let myLeads = []
let oldLeads = []
const saveBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulel = document.getElementById("ul-el")
const tabel = document.getElementById("tab-btn")
const deletel = document.getElementById("delete-btn")
const Leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))

if (Leadsfromlocalstorage) {
  myLeads = Leadsfromlocalstorage 
  render(myLeads)
}

tabel.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

saveBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  console.log(localStorage.getItem("myLeads"))
})

deletel.addEventListener("dblclick", function(){
  myLeads = []
  localStorage.clear()
  render(myLeads)
})

function render(leads) {
  let listitems = ""
  for (let i = 0; i < leads.length; i++) {
    listitems += `
      <li>
        ${leads[i]}
        <button class="deletebut fa fa-trash" data-index="${i}"></button>
      </li>`
  }
  ulel.innerHTML = listitems

  // Add event listeners to all delete buttons
  const deleteButtons = document.querySelectorAll(".deletebut")
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      const index = this.getAttribute("data-index")
      myLeads.splice(index, 1)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)
    })
  })
}

/*
const container= document.getElementById("container")

container.innerHTML =  "<button onclick ='buy()'>button</button>" 


function buy(){
  container.innerHTML += "<p> thanks</p>"
}

*/
















  //---------------------------------------



/*
let cards = [] //this[firstcard, secondcard]
let sum =  0//this firstcard + secondcard
let blackjack= false
let isalive = false
let message =""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

let player = {

  name : "Adam",

  chips : 420
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  
  let randomnumber =  Math.floor(Math.random()*13)+1 

  if (randomnumber === 1 )
  {
    return 11
  } else if(randomnumber >10){
    return 10
  } else {
    return randomnumber
  }
}

function StartGame(){
  isalive=true
  let firstcard = getRandomCard()
let secondcard = getRandomCard()
 sum =  firstcard + secondcard
cards = [firstcard, secondcard]
  renderGame()
}

function renderGame(){
cardEl.textContent="cards: "
 for(i=0;i<cards.length;i++){
   cardEl.textContent += cards[i] + " "
};
sumEl.textContent="sum: "+ sum

  if(sum<=20){
    message = "new card?"
  
  }else if (sum ===20){
    message = "GG"
    blackjack= true
  }
  else{
  message = "OUT!"
    isalive= false
  }
  
messageEl.textContent = message
}


function NewCard(){
  if ( isalive === true && blackjack === false ){
    let card= getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
  

  }

}*/

//------------------------------------------------