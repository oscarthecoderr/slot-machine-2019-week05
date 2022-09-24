//get element by class name returns a node list is basically a array but its not.
const buttons = document.getElementsByClassName('bet') //targets both buttons
console.log(buttons)

// for is giving each button for an event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', gamble)
}
const slots = document.getElementsByClassName('slot')
console.log(slots) // we created a variable called slots. the slots gets assigned the document .....

let slotNumbers = [1, 2, 3, 4, 5] // numbers represent items  

let money = document.querySelector('.money') // represents how much money you have
money.innerText = 15000 // adding to the html tag 10000. reassign or assign the innertext of the p tag from html.

function gamble(event) {
  let bet = Number(event.target.innerHTML) // e is the event object. the event itself is the clicking. .target is where you clicking on the page.
  for (let i = 0; i < slots.length; i++) {
    slots[i].innerHTML = slotNumbers[randomIndex(slotNumbers.length)]
  } // ^ since 0 is less than slots.length(3), then it will continue to run the code block. the slot[0].innerText is reassigning to the slot number that was randomly chosen using randomIndex. happens 3 times. 
  if (slots[0].innerHTML === slots[1].innerHTML && slots[1].innerHTML === slots[2].innerHTML) {
    document.querySelector('.status').innerText = 'YOU WON'
    money.innerText = money.innerText + bet 
  } else {
    document.querySelector('.status').innerText = 'YOU LOST'
    money.innerText = money.innerText - bet
  }
}

function randomIndex(slotArrayLength) {
  return Math.floor(Math.random() * slotArrayLength)
} // in this function name random, it has a parameter called slotArrayLength and here it will return a whole numer( math.floor) that represents the index from the array(slotNumbers). 
