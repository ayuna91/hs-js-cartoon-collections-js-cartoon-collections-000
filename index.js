function dwarfRollCall(dwarves){
  var counter = 1;
  var newArray =[];
  for(let i=0; i< dwarves.length; i++){
    newArray.push(`${counter}. ${dwarves[i]} `)
    counter++;
  }
  return newArray.join('')
}





function summonCaptainPlanet(planeteerCalls){
  var newArray =[];
  for(let i = 0; i< planeteerCalls.length; i++){
    newArray.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return newArray;
}




function longPlaneteerCalls(words){
  var result = false;
  for(let i=0; i< words.length; i++){
    if(words[i].length > 4 ){
      result = true;
    }
  }
  return result;
}





function findTheCheese(food){
  var result = '';
  for(let i=0; i<food.length; i++){
     if( (food[i] === 'gouda') || (food[i] === 'cheddar') || (food[i] === 'camembert') ){
      result = food[i];
      console.log(result)
     }
  }  
     if(result === ''){
      return 'no cheese!'
     }
}