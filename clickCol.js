// 操作DOM

// 1. 抓出要的HTML元素 (DOM節點)
const title = document.getElementById("title");
// 標籤(不加) Id(#Id) Class(.class)
const button = document.querySelector("#btn");
const input = document.querySelector("#input");

// console.log(title.textContent);
// title.innerText = "這是從JS來的"

// // 增加事件的監聽器
// let amount = 0;
// button.addEventListener("click", function(){
//     amount += 1;
//     title.innerText = amount;
//     console.log(amount);
// })

button.addEventListener("click", function(){
    const num = input.value;
    title.innerText = num;
    input.value = null;
    console.log(num);
});