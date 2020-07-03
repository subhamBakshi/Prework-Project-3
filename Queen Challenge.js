// Creating the queen object
var queen = {
  direction: "S",
  position: {
    xCo: 4,
    yCo: 0,
  },
  whereabouts: [],
};

//Taking Input
function input() {
  var input = document.getElementById("dir").value;
  //slicing the input
  if (input.length === 2) {
    var direction = input.slice(0, 1);
    var steps = Number(input.slice(1));
  } else if (input.length === 3) {
    var direction = input.slice(0, 2);
    var steps = Number(input.slice(2));
  }
  changeDirection(direction, steps); //reading the variables
  input();
}

// Turning the queen
function changeDirection(newDirection, steps) {
  switch (newDirection) {
    case "E":
      newDirection = "E";
      queen.direction = newDirection;
      break;
    case "W":
      newDirection = "W";
      queen.direction = newDirection;
      break;
    case "S":
      newDirection = "S";
      queen.direction = newDirection;
      break;
    case "N":
      newDirection = "N";
      queen.direction = newDirection;
      break;
    case "NW":
      newDirection = "NW";
      queen.direction = newDirection;
      break;
    case "NE":
      newDirection = "NE";
      queen.direction = newDirection;
      break;
    case "SE":
      newDirection = "SE";
      queen.direction = newDirection;
      break;
    case "SW":
      newDirection = "SW";
      queen.direction = newDirection;
      break;

    default:
      //   console.log("Invalid");
      document.getElementById("demo").innerHTML = "Invalid";
      input();
  }
  moveForward(queen.direction, steps);
}

// Moving the queen
//
//         N(-)
//          |
//          |
// (-)W-----|-----E(+)
//          |
//          |
//         S(+)
//
function moveForward(direction, count) {
  if (direction === "S") {
    queen.position.yCo += count;
  } else if (direction === "N") {
    queen.position.yCo -= count;
  } else if (direction === "E") {
    queen.position.xCo += count;
  } else if (direction === "W") {
    queen.position.xCo -= count;
  } else if (direction === "SE") {
    queen.position.xCo += count;
    queen.position.yCo += count;
  } else if (direction === "SW") {
    queen.position.xCo -= count;
    queen.position.yCo += count;
  } else if (direction === "NE") {
    queen.position.xCo += count;
    queen.position.yCo -= count;
  } else if (direction === "NW") {
    queen.position.xCo -= count;
    queen.position.yCo -= count;
  }

  outOfBoard(queen.position.xCo, queen.position.yCo, count);
}

function updatePosition(xCo, yCo) {
  var char = String.fromCharCode(97 + xCo); //for output display
  queen.whereabouts.push(char + yCo);
  console.log(queen.whereabouts);
  document.getElementById("demo").innerHTML =
    "Queen's new position: " + queen.whereabouts;
}

//outOfBoard
function outOfBoard(xCo, yCo, count) {

  // a0,b0,c0,d0,e0,f0,g0,h0 |
  // a1,b1,c1,d1,e1,f1,g1,h1 |
  // a2,b2,c2,d2,e2,f2,g2,h2 |
  // a3,b3,c3,d3,e3,f3,g3,h3 |
  // a4,b4,c4,d4,e4,f4,g4,h4 |
  // a5,b5,c5,d5,e5,f5,g5,h5 |
  // a6,b6,c6,d6,e6,f6,g6,h6 |
  // a7,b7,c7,d7,e7,f7,g7,h7 |
  //-------------------------|--(7,0)
  //                         |
  //                        (0,7)

  if (xCo > 7) { //restricting E to h;
    document.getElementById("demo").innerHTML =
      "Where do you think you are going?!";
    queen.position.xCo -= count;
    input();
  } else if (xCo < 0) { //restricting W to a;
    document.getElementById("demo").innerHTML =
      "Where do you think you are going?!";
    queen.position.xCo += count;
    input();
  } else if (yCo < 0) { //restricting N to 0;
    document.getElementById("demo").innerHTML =
      "Where do you think you are going?!";
    queen.position.yCo += count;
    input();
  } else if (yCo > 7) { //restricting S to 7;
    document.getElementById("demo").innerHTML =
      "Where do you think you are going?!";
    queen.position.yCo -= count;
    input();
  }
  updatePosition(queen.position.xCo, queen.position.yCo);
}