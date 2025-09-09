for(let i = 1;i <=5;i++){
    console.log("* ".repeat(i))
}

for(let i = 1;i <=5;i++){
    let spaces= " ".repeat(5-i)
    console.log(spaces + "* ".repeat(i))
}
for(let i = 1;i <=5;i++){
    console.log(i.toString().repeat(i))
}

let key=""
for(let i = 1;i <=5;i++){
    key=i+key
    console.log(key)
}

