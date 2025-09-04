// Write your solution here!
// declare cats with const
const cats = ["Milo", "Otis", "Garfield"]

// adds name at the end
function destructivelyAppendCat(name){
cats.push(name);
}

// adds name at the start
function destructivelyPrependCat (name){
    cats.unshift(name);
}
// removes name at the end
function destructivelyRemoveLastCat (name){
    cats.pop(name);
}

// removes name at the start 
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

// adds new cat after the cats list & doesnt change its original list

function appendCat(name){
    return [...cats, name]
}

// adds new cat before the cats list & doesnt change its original list
function prependCat(name){
    return [name, ...cats]
}

// removes last cat list and doesnt change its list
function removeLastCat(){
    return cats.slice(0, -1);
}

// removes first cat list & doesnt change its original list
function removeFirstCat(){
    return cats.slice(1);
}
