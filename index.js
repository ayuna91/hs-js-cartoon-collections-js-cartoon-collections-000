//['sleepy', 'sneezy', 'grumpy', 'dog']
// ['sleepy', 'sneezy']

function dwarfRollCall(dwarves){
  var counter = 1;
  var newArray =[];
  for(let i=0; i< dwarves.length/2; i++){
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
     if( (food[i] === 'gouda') || (food[i] === 'cheddar') || (food[i] === 'camembert') || (food[i] === 'swiss') ){
      result = food[i];
      break;
     }
  }  
     if(result === ''){
      return 'no cheese!'
     }else{
       return result;
     }
}

// ['al', 'bob', 'betty']
//['bob', 'betty']

function wordsWithB(words){
  var newArray = [];
  for(let i=0; i< words.length; i++){
    if(words[i].startsWith('b')  ){
      newArray.push(`${words[i]}`)
    }
  }
  return newArray;
}





