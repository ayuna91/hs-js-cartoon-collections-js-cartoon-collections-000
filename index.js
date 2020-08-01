function dwarfRollCall(dwarves){
var newArray = [];
for(let i=0; i<dwarves.length; i++){
  newArray.push(`${i+1}. ${dwarves[i]} `)
}
return newArray.join('');
}
 



function summonCaptainPlanet(planeteerCalls){
  
 for(let i=0; i<planeteerCalls.length; i++){
   planeteerCalls[i] = `${planeteerCalls[i].toUpperCase()}!`;
 }
 return planeteerCalls;
}





function longPlaneteerCalls(words){
  var result = false;
  for(let i=0; i<words.length; i++){
    if(words.length>4){
      result = true;
      return result;
    }else{
      return false;
    }
  }
}


function findTheCheese(food){
 var result = null;
    for(let i=0; i<food.length; i++){
        if( (food[i]==='gouda') || (food[i]==='cheddar') || (food[i]==='camembert') ){
          result = food[i];
          
        }
    }  
  if(result === null){
  return 'no cheese!';
    }else{
      return result;
    }
}













