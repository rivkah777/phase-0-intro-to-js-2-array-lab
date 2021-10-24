const cats = ['Milo','Otis','Garfield'];
  
  function destructivelyAppendCat(name) {
    cats.push(name);

  }
  
 function destructivelyPrependCat(name) {
   cats.unshift(name);

 }
  
  function destructivelyRemoveLastCat() {
    cats.splice(-1);
  }

  function destructivelyRemoveFirstCat() {
    cats.splice(0,1);
  }

  

 
  function appendCat(name) {
    let newCats = [...cats,name];
    return newCats;
  }
 

 
  function prependCat(name) {
    let orangeCat = [name, ...cats];
    return orangeCat;

  }
  function  removeLastCat() {
    let purpleCats = [...cats];
    purpleCats.splice(-1)
    return purpleCats;
  } 

  
 function removeFirstCat() {
   let pinkCats = [...cats];
   pinkCats.splice(0,1)
   return pinkCats
 }
  
  
  
  