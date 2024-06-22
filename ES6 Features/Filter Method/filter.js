// funtion is a type of funtion or method that returns value

// 1)using Arrow function with paranthesis(no need of return keyword)
const Names = ['sachin','ram','shyam','jack']
const filtering =Names.filter(  (Myname)=> (Myname.length > 4)  )
console.log(filtering); //[ 'sachin', 'shyam' ]

//Note: here's a anonymous function is known as callback function

// 2)using  function with curlyBraces(scope with return keyword)
const myNum = [0,1,2,3,4,5,6,7,8,9,10]
const numberNeed = myNum.filter(   function(nums){
    return nums < 5 ;
    // output :- [ 0, 1, 2, 3, 4 ]
} )

console.log(numberNeed)