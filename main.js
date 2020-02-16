// teamMembers: Eric, Finesse, Vanessa, Elmer, Zikre, Nyah
//The entire team came up with this code together. Editing each portion, adding, etc. 
// The below is the result of that collaboration.  

// Final Agreed Upon Code for Team
document.getElementById("startButton").addEventListener("click",function(){
  var bet = document.getElementById("placeBets").value
  var betNum = parseInt(bet)
getRandomImage(betNum)
});

var money = 1000
document.getElementById("money").innerHTML = money  
function getRandomImage(betNum){
  var images = ["./img/catLady.png", "./img/cryingJordan.jpg", "./img/doge.png", "./img/jerry.png", "./img/pepe.jpg"];
  var imgLeft = getRandomNumber()
  var imgMiddle = getRandomNumber()
  var imgRight = getRandomNumber()
  // console.log(imgLeft, imgMiddle, imgRight);
  document.getElementById("imgLeft").src = images[imgLeft]
  document.getElementById("imgMiddle").src = images[imgMiddle]
  document.getElementById("imgRight").src = images[imgRight]
  checkWin(imgLeft, imgMiddle, imgRight, betNum)
}

function getRandomNumber(){
  var num = Math.random() * 5;
  var randomNum = Math.floor(num);
  return randomNum
}

function checkWin(imgLeft, imgMiddle, imgRight, betNum){
  if (imgLeft === imgMiddle === imgRight){

    money = money + betNum*10
  }

  else {
    money = money - betNum

  }
  document.getElementById("money").innerHTML = money
}

// TEST CODE
//
// for (i = 1000; i != 0; i += x) {
//   if (aNumber % 50 === 0) {
//     console.log("");
//   } else if (aNumber % 100 === 0) {
//     console.log("");
//   }
//   let number = 0
//   while (number < 1000) {
//     console.log(number);
//   }
//   number = number += 1;
//
//
//   function slot(item, reels) {
//     let aNumber = 0
//     for (i = 1000; i != 0; i -= x) {
//       if (aNumber % 50 === 0) {
//         console.log("");
//       } else if (aNumber % 100 === 0) {
//         console.log("");
//       }
//       let number = 0
//       while (number < 1000) {
//         console.log(number);
//       }
//       number = number += 1;
//
//       // const leftSlot.document.querySelector(leftSlot).innerHTML=num
//       /*
//       if {
//       }
//       */
//       // <!-- Set Math.random on each array -->
//       const leftSlot = document.querySelector("#leftSlot")
//       let num = 0
//       leftSlot.addEventListener("click", () => {
//         num = num + 45
//         leftSlot.style.transform = `rotateZ(${num}deg)`
//         console.log(num)
//       })
//
//       // let arrayOne = ['one', 'two', 'three', 'four', 'five'];
//       // let leftSlot = arrayOne[Math.floor(Math.random() * arrayOne.length)];
//       // for(i=1000; i != 0; i-= x){
//       //   if (i % 50 === 0) {
//       //     console.log("");
//       //   }else if (i % 100 ===0 ) {
//       //     console.log("");
//       //   document.querySelector(#leftSlot)
//       //   var slot = Math.random()
//       //     if ( randomNum < .2 ){
//       //       promt("five")
//       //     }else{
//       //       promt("fifty")
//       //     }
//       //   }
//       //   randomThrow()
//       //   ar randomNum = Math.random()
//       //   if ( randomNum < .2 ){
//       //     alert("rock")
//       //   }else if ( randomNum < .4 ){
//       //     alert("paper")
//       //   }else if ( randomNum < .6 ){
//       //     alert("scissors")
//       //   }else if ( randomNum < .8 ){
//       //     alert("lizard")
//       //   }else{
//       //     alert("spock")
//       //   }
//       // }
//       // randomThrow()
//       console.log("random from first array =>", leftSlot);
//
//       let arrayTwo = ['one', 'two', 'three', 'four', 'five'];
//       let middleSlot = arrayOne[Math.floor(Math.random() * arrayTwo.length)];
//
//       console.log("random from first array =>", middleSlot);
//
//       let arrayThree = ['one', 'two', 'three', 'four', 'five'];
//       let rightSlot = arrayOne[Math.floor(Math.random() * arrayThree.length)];
//
//       console.log("random from first array =>", rightSlot);
//
//       // <!-- Compare three outputs (if __ === ___===___) -->
//       if (leftSlot === middleSlot === rightSlot) {
//         console.log("true")
//
//       } else {
//         console.log("false")
//
//       }


      // <!--  Then add money to running total for WIN(10X BET) , or subtract money for LOSS-->
      // <!-- Figure out bets: MIn Bet, Max Bet -->

      // <!-- Figure out money total: starts at $1,000 --


      // Nyah and Josh's Trial and Error Code
      /*
      let arrayOne = ['/img/catLady.png', '/img/cryingJordan.jpg', '/img/doge.png', '/img/jerry.png', '/img/pepe.jpg'];
      let leftSlot = arrayOne[Math.floor(Math.random() * arrayOne.length)];

      console.log("random from first array =>", leftSlot);

      let arrayTwo = ['/img/catLady.png', '/img/cryingJordan.jpg', '/img/doge.png', '/img/jerry.png', '/img/pepe.jpg'];
      let middleSlot = arrayTwo[Math.floor(Math.random() * arrayTwo.length)];

      console.log("random from first array =>", middleSlot);

      let arrayThree = ['/img/catLady.png', '/img/cryingJordan.jpg', '/img/doge.png', '/img/jerry.png', '/img/pepe.jpg'];
      let rightSlot = arrayThree[Math.floor(Math.random() * arrayThree.length)];

      console.log("random from first array =>", rightSlot);

      // <!-- Compare three outputs (if __ === ___===___) -->
      if (leftSlot === middleSlot === rightSlot){
      console.log("true")

      }else{
      console.log("false")
      */
    // }
    //
    // var arrayOne = new Array();
    // arrayOne[0] = 'catLady.png';
    // arrayOne[1] = "cryingJordan.jpg";
    // arrayOne[2] = "doge.png";
    // arrayOne[3] = "jerry.png";
    // arrayOne[4] = "pepe.jpg";
    //
    // var arrayTwo = new Array();
    // arrayTwo[0] = 'catLady.png';
    // arrayTwo[1] = "cryingJordan.jpg";
    // arrayTwo[2] = "doge.png";
    // arrayTwo[3] = "jerry.png";
    // arrayTwo[4] = "pepe.jpg";
    //
    // var arrayThree = new Array();
    // arrayThree[0] = 'catLady.png';
    // arrayThree[1] = "cryingJordan.jpg";
    // arrayThree[2] = "doge.png";
    // arrayThree[3] = "jerry.png";
    // arrayThree[4] = "pepe.jpg";
    //
    //
    // getRandomImage(arrayOne, "");
    //
    // function getRandomImage(imgAr, path) {
    //     path = path || 'images/'; // default path here
    //     var num = Math.floor( Math.random() * imgAr.length );
    //     var img = imgAr[ num ];
    //     var imgStr = '<img src="' + path + img + '" alt = "">';
    //     document.write(imgStr); document.close();
    // }
    // */

