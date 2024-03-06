// alert("connected");

// console.log(" I ");
// console.log(" eat ");
// setTimeout(()=>{
//     console.log(" date. ");
// },2000);

//*************************** */
let stocks={
    fruits: ["strawberry", "apple", "grapes","banana"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanut",]
};
// // console.log(stocks.fruits[0]);
// let order = (fruitName,  call_production)=>{
//     // console.log("order placed");
//     setTimeout(()=>{
//  console.log(stocks.fruits[fruitName]);
//  call_production();
//     },2000);
    
// };

// let production = ()=>{
//     // console.log("order recieveed");
//     setTimeout(()=>{
//         console.log("prodaction has started")
//     },0000);
//     setTimeout(()=>{
//         console.log("fruit has chopped");
// }; 

// order(0,production);

//*************************** */

//  let shopOpen= true;

 let order = (time, work)=>{

        return new Promise((resolve, reject)=>{
            if(shopOpen){
                setTimeout(function(){
                    resolve(work());
                },time);
            }
            else{
                reject(console.log("Shope is closed"));
            }
        });
 };

// order(2000, ()=>console.log(stocks.fruits[4])
//     .then(()=>{
//     return order(2000, ()=>console.log("production is started!"));
// );

return order(2000, ()=> console.log("the fruit was chopped"));
//*************************** */


