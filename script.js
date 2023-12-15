let guess = ["s", "g", "w"];

let random1 = Math.floor(Math.random() * guess.length);

let a = 0;

while (a < 5) {
  let random = prompt("enter");
  let user1 = random;
  let user2 = guess[random1];
  if (user1 == user2) {
    console.log("game tie");
  } else if (user1 == "s" && user2 == "w") {
    console.log("user1 is winner");
    console.log(user1, user2);
  } else if (user1 == "s" && user2 == "g") {
    console.log("user2 is winner");
    console.log(user1, user2);
  } else if (user1 == "w" && user2 == "s") {
    console.log("user2 is winner");
    console.log(user1, user2);
  } else if (user1 == "w" && user2 == "g") {
    console.log("user1 is winner");
    console.log(user1, user2);
  } else if (user1 == "g" && user2 == "w") {
    console.log("user2 is winner");
    console.log(user1, user2);
  } else if (user1 == "g" && user2 == "s") {
    console.log("user1 is winner");
    console.log(user1, user2);
  }
  a++;
}
