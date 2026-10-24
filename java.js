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
// const numbers = [10, 20, 30, 40];
// const total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total);

// const nums = [10, 20, 30, 40, 50];
// const sliced = nums.slice(1, 3);
// const removed = nums.splice(2, 1);
// console.log(sliced);
// console.log(removed);

// const scores = [10, 20, 15, 5];
// const hasLargeValue = scores.some((n) => n > 20);
// console.log(hasLargeValue);

// const employee = {
//     name: "Arun",
//     age: 21,
//     course: "React",
//     kum:{city:"chennai"}
// };

// const { name, age, course } = employee;
// console.log(name);
// console.log(age);
// console.log(course);

// const {
//     name:studentname,
//     city="chennai"
// }=employee

// console.log(studentname);
// console.log(city);
//  const profile={
//     ...employee
//     age=30
//  }
// console.log(`My name is ${employee.name}`)


//?.
// console.log(employee.kum?.city);

//??
// const us=null;
// const nm=null;
// console.log(us ?? "yoooooo")
// console.log(nm ?? 78134827)


// console.log(0 ?? 100) ;
// console.log(0 || 100);

// console.log(false || true);
// console.log(false ?? true);

// const a
// console.log(a)
// a=10

// Greet();
// function Greet(){
//     console.log("fosf")
// }
// const res = () => console.log("fsfsdfe")

// function Account(){
//     let balance=1000;
//     function Deposit(amount){
//         balance=balance+amount
//         console.log("BalanceAmount"+balance);

//     }
//     return Deposit
// }
// const MyAccount=Account();
// MyAccount(500);
// MyAccount(700);

// console.log("a")
// for(let i=0;i<10;i++){
//     console.log("fnish")
// }

// setTimeout (function(){
//     console.log("SET READY")
// },2000);
// console.log("end")

// const myPromise = new Promise(function (resolve, reject) {
//     let paySuccess=true
//     if (paySuccess){
//         resolve("Payment Success")
//     }
//     else{
//         reject("Payment failed")
//     }
// });
// myPromise
//     .then(function(result){
//     console.log(result);
//     })
//     .catch(function(error){
//     console.log(error);
// });
