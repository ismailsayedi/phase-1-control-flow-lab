function scuberGreetingForFeet (distance){
  let message;
  if (distance <= 400) {
    message = "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    message = "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    message = "I will gladly take your thirty bucks.";
  } else {
    message = "No can do.";
  }
  return message;
}
  // Write your code here!
  
  

function ternaryCheckCity(city){
  // Write your code here!
  return city==='NYC'?'Ok, sounds good.':'No go.';

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous'  :
      return 'Thank you.'
    default :
      return 'Bye.'

  }
}