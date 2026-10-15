// // // // // // // // let i=1
// // // // // // // // do{
// // // // // // // //     console.log(i)
// // // // // // // //     i++
// // // // // // // // }while(i<=5)
// // // // // // // // const add=(a,b)=>{
// // // // // // // //     return a+b
// // // // // // // // }
// // // // // // // function welcome(name='Student'){
// // // // // // //     console.log('Welcome ' + name)
// // // // // // // }
// // // // // // // welcome('John')
// // // // // // function display(callback){
// // // // // //     console.log('Display function')
// // // // // //     callback()
// // // // // // }
// // // // // // function show(){
// // // // // //     console.log('Show function')
// // // // // // }
// // // // // // display(show)
// // // // // const students=["Priya","Ravi","John","Anita","Rahul",]
// // // // // console.log(students[0],students[4])
// // // // // students.push("Sita")
// // // // // console.log(students)
// // // // // console.log(students.pop())
// // // // // console.log(students.slice(4,1))
// // // // // students.splice(2,2)
// // // // // console.log(students)
// // // // const prices=[100,200,300,400,500]
// // // // const newPrices = prices.map((price) => price + 50);
// // // // console.log(newPrices)
// // // const products = [
// // //     { name: "laptop", price: 50000 },
// // //     { name: "Mouse", price: 500 },
// // //     { name: "Keyboard", price: 1500 },
// // //     { name: "Monitor", price: 12000 },
// // //     { name: "Printer", price: 2000 }
// // // ];

// // // // const filteredProducts = products.filter((product) => product.price > 1000);
// // // // console.log(filteredProducts);

// // // products.forEach((product) => {
// // //     console.log(product.name);
// // // });
// // let strong=[40,10,5,20,30]
// // let res=strong.sort((a,b)=>a-b)
// // console.log(res)
// let number=[10,20,30,40]
// let res=number.reduce((total,num)=>{
//     return total+num;
// },0);
// console.log(res);
// let number=[10,20,30,40,50]
// let a=number.slice(1,3)
// let b=number.splice(2,1)
// console.log(a);
// console.log(b);
// let number=[10,20,15,5]
// let result=number.some((n)=>{
//     return n>20
// });
// console.log(result)
