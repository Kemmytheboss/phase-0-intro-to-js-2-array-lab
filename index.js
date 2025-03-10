// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]


//Appending cat

function destructivelyAppendCat(){
    cats.push("Ralph")
}


//prepending cat
function destructivelyPrependCat(){
    cats.unshift("Bob")
}


//remove last cat
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
}


//remove first cat
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}


//appending cat while displaying new array
function appendCat(){
const newcats =[...cats, "Broom"];
return newcats;
}
//prepends cat while displaying new array
function prependCat(){
const newcats1 = ["Arnold", ...cats];
return newcats1;
}

//removes last cat while living old array untouched
function removeLastCat(){
  const copyofcats=cats.slice(0,-1);
  return copyofcats;
   
}
//removes first cat while....
function removeFirstCat(){
     
    const copyofcats1 = cats.slice(1);
    return copyofcats1;
   
    
}