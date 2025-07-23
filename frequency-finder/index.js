let arr=[1,1,2,2,3,4,5,6,7,8,1,2,3,4,5,6,9,7,1,2,3,6,4,7,9,6,5,2]

let freq={}

for(let val of arr){
    if(freq[val]){
        freq[val]++
    }
    else{
        freq[val]=1
    }
}

console.log(freq)