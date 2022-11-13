// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log (`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(nameArray, event) {
    const thanksArray = [];
    
    for (let counter = 0; 
        counter < nameArray.length; 
        counter++) {

        thanksArray.push(`Thank you, ${nameArray[counter]}, for the wonderful ${event} gift!`);
    }
  
    return thanksArray;
  }
  
const nameArray = ["Sian", "Keri", "Aaron"];

console.log(writeCards(nameArray, "random xD"));


function countDown(positiveInteger) {
    for (let counter = positiveInteger;
        counter >= 0;
        counter--) {

            console.log(counter);
        }
}

console.log(countDown(19));

function countDownWhileLoop(positiveInteger) {
    let counter = positiveInteger;
        while (counter >= 0) {

            console.log(counter);
            counter--;
        }
}

console.log(countDownWhileLoop(15));