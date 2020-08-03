function dwarfRollCall(dwarves){
var counter = 1;
var newArray = [];
for(let i=0; i<=dwarves.length-1; i++){
  newArray.push(`${counter++}. ${dwarves[i]} `)
  
}
return newArray.join('');
}
 


function summonCaptainPlanet(planeteerCalls){
  for(let i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i]=`${planeteerCalls[i].toUpperCase()}!`
  }
return planeteerCalls;
}





function longPlaneteerCalls(words){
 var result = false;
 
 for(let i=0; i<words.length; i++){
   if(words[i].length>4){
     result = true;
   }
 }
   return result;
}





function findTheCheese(food){

var result = null;
 for(let i=0; i<food.length; i++){
   if( (food[i]==='cheddar') || (food[i]==='gouda') || (food[i]==='camembert')  ){
     result = food[i];
     break;
   }
 }
 if(result === null){
   return 'no cheese!'
 }else{
   return result;
 }
}