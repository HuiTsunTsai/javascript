// // 印出 = System.out.printLn()
// console.log("Hello World")

// // 變數宣告 弱型別
//     // let // 變數
//     // const // 常數  // java的final

//     let a = "hazel";
//     a = [1, 2, 3, 4, 5, 6] // 陣列
//     a = { // 物件
//     // key : value
//         name : "hazel",
//         tel : 1234567,
//         address : "zxcasd",
//         ff : false
//     }
// // JavaScript 基礎型別
//     Number //數字
//     String //字串、字元
//     Boolean //布林
//     null //工程師自己手寫上去的
//     undefined //系統給你的空值 ＝ java的null
//     Object //物件
//     Symbol //新的型別

// // 1~1000 偶數的總和
// let total = 0
// for(let i = 2; i <= 1000; i+=2){
//     total += i
// }
// console.log(total)

// let arr = [10, 20, 30, 40, 50]
// for(let i = 0; i < arr.length; i++){
// console.log(arr[i]);
// }

// callbake 回呼
// arr.forEach(
//     function(i){
//         console.log(i);
//     }
// )

// 練習foreach
// let qq = ["我", "是", "hazel", 22]
// qq.forEach(
//     function(x){
//         console.log(x);
//     }
// )

// // Filter
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// const filterArr = arr.filter(function(i){
//     return i % 20 == 0
// });

// // Map
// const mapArr = arr.map(function(i){
//     return i+1
// });
// console.log(mapArr);

// 練習 1~1000 偶數和 // 用 filter map
let array = [];
for(let i = 1; i <= 1000 ; i++){
    array.push(i)
};
const filterArr = array.filter(function(a){
    return a % 2 == 0
});
console.log(filterArr);

const mapArr = array.map(function(a){
    if(a % 2 != 0){
        return null
    }
    return a
});
console.log(mapArr);

// // 宣告方法 / 函式
// function aa(){
//     console.log("this's aa")
// };
// aa();

// 提升 hoisting
bb();
function bb(){
    console.log("這是bb")
}
