
var i =1;
var sum =0;
while( i<=50){
    if(i%3==0 && i%5==0){
        console.log(i);
        sum= sum+i
    }
    i=i+1
}
console.log(sum);