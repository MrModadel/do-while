let user;
let num = 0;
do {
   if (num === 0) {
      user = +prompt(`пороль`).trim()
   } else {
      user = +prompt(`пороль ${num}`).trim()
   }
   num++
} while (user!==7777&&num!==11)