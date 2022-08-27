function scuberGreetingForFeet(tripFeet){
  if (tripFeet <=400) {
    return 'This one is on me!'
  } else if (tripFeet >400 && tripFeet <=2000) {
    return 'That will be twenty bucks.'
  } else if (tripFeet >2000 && tripFeet <=2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}
let answer = ""
  
function ternaryCheckCity(cityCheck){
  answer = (cityCheck === 'NYC') ? `Ok, sounds good.` : "No go.";
  return answer;
}
let response = ""

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 
      'generous': response = "Thank you so much.";
      return response;
    case 
      'not as generous': response = "Thank you.";
      return response;
    case
      'thanks for everything': response = "Bye.";
      return response;
  }
}