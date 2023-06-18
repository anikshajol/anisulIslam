var names = new Array()

names[0] = 'Shima'
names[1] = 'I'
names[2] = 'Love'
names[3] = 'You'

// console.log(names[1]);

var num = [1,3,4,5]
num.push(37,38)
num.pop()
// console.log(num);

var com = names.concat(num)

// console.log(com);



// loop in an array

var sum = 0;

for(var i = 0; i<num.length; i++){
    console.log(num[i],i);
    sum= sum+num[i]
}

// console.log(sum);

//shift is oposit of pop
// unshift is oposite of push. 

function highestScore(scores) {
    
    var max = scores[0]
    
    for(var x = 1; x<scores.length; x++){
        if(max<scores[x]){
            max = scores[x]
        }
    }
    return max
}

var scores = [21,34,53,63,1,3]
var result = highestScore(scores)
console.log('max',result);
