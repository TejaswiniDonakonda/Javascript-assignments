//Arrays
let item=["ant","bat","cat","dog","eagle","frog","goat","hen",];
console.log("lenght of array is: ",item.length);

for(let i=0; i<=item.length-1;i++){
    console.log(i,"=>",item[i]);
}

console.log("----reverse order------");

for(let i=item.length; i>=0;i--){
    console.log(i,"=>",item[i]);
}


console.log("---------method 1-------------");
item.map(a=>{
    console.log(a);
});

console.log("-------method 2---------");
item.map(function(a,b){
    console.log(b,a);
});

console.log("--------method 3------------");
item.map((value,index)=>{
    console.log(index, value);
});