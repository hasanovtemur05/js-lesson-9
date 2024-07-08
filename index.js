//  1 - masala
// function getInitialOdds(n) {
//     let odds = [];
//     for (let i = 0; i < n; i++) {
//       odds.push(2 * i + 1);
//     }
//     return odds;
//   }
//   console.log(getInitialOdds(3));



// 2 - masala
// let str = "salom dunyo"
// let arr = []

// function vowelLetters(n) {
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === "a" || str[i] === "o" || str[i] === "u" || str[i] === "o'" || str[i] === "i" || str[i] === "e") {
//             arr.push(str[i])
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         console.log(i+1);
//     }
    
//     console.log(arr);
// }

// vowelLetters()




// 3 - masala
//   let numbers = [1,2,3,4,5,6,7,8];
//     let largeNumber = find(numbers);
//     function find(arr) {
//     let max = arr[0];
//     let min = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     numbers.splice(0, 1 , max)
//     numbers.pop()
//     numbers.push(min);
//     console.log(numbers);
//   }
//   console.log(largeNumber); 



// 4 - masala
// function letterInvolved(n) {
//     let str = "salaaaaom dunyo"
//     let count = 0
//     for(let i = 0; i < str.length; i++){
//         if (str[i] === "a") {
//            count ++
//         }
//     }
//     console.log(count, "ta a harfi bor");
// }
// letterInvolved()



// 5 - masala
// function nume(){
//     let nums = [2,7,11,15]
//     let target = 9
//     let result = []
//     for(let i = 0; i < nums.length; i++){
//         for(let g = 0; g < nums.length; g++){
//             if (nums[i] + nums[g] === target) {
//                 result.push(nums[i], nums[g])
//             }
//         }
//     }
//    console.log(result);
// }
// nume()


// 6 - masala
// function dublicate() {
//     let arr = [1,2,3,3,3,4,5,6]
//     let son1 = [];
//     let son2 = [];
//     for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (!son1[item]) {
//         son1[item] = true;
//         son2.push(item);
//     }
// }

//     console.log(son2); 
// }
// dublicate()
