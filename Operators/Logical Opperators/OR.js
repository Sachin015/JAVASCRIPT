let marks = Number(prompt(`Enter your marks`))
if(marks<=23 || marks== 0){
    console.log(`You are failed`);
}
else if(marks>=24 || marks == 60){
    console.log(`You are passed`)
}
else{
    console.log(`You are Absent`)
}