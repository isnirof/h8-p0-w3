function groupAnimals(animals) {
  animals.sort();
  hasil=[];
  
  for(i=0;i<animals.length;i++) {
      found = false;
      for(j=0;j<hasil.length;j++) {
          if(hasil[j][0][0]===animals[i][0]){
              hasil[j].push(animals[i]);
              found=true;
          }
      }
      if(!found) {
          hasil.push([animals[i]]);
      }
  }
  return hasil;
}
// / TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log('------');
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]