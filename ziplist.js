let list1 =[1,2,3,4];
let list2 =['a','b','c','d'];

function zipList(l1, l2){
  let newArray= [];
  for(let i=0; i<list1.length; i++){

    newArray.push(list1[i], list2[i]);
  }
  return newArray;
}
console.log(zipList(list1 ,list2));

function zipListTheSimpleWay(l1, l2){

  return _.flatten(_.zip(list1,list2));
}
console.log(zipListTheSimpleWay(list1 ,list2));