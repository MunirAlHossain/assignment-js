// 1. Feet To Mile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var measurement = [1000, 5000, 50000];

var feet1000 = feetToMile(measurement[0]);
console.log(feet1000);

var feet5000 = feetToMile(measurement[1]);
console.log(feet5000);

var feet50000 = feetToMile(measurement[2]);
console.log(feet50000);


// 2. Wood Calculator

function woodCalculator(chair, table, bed){
    var chairNum = chair * 1;
    var tableNum = table * 3;
    var bedNum = bed * 5;
    var totalWood = chairNum + tableNum + bedNum;
    return totalWood;
}

var result = woodCalculator(14, 5, 12);
console.log(result);


// 3. Brick Calculator

function brickCalculator(floorNum){
    var perFloor = floorNum * 1000;
    var floorLength;

    if(floorNum >0 && floorNum <= 10){
       floorLength = perFloor * 15;
    }
    else if(floorNum > 10 && floorNum <= 20){
        floorLength = (perFloor * 12) + 30000;
    }
    else if(floorNum > 20){
        floorLength = (perFloor * 10) + 70000;
    }
    else{
        console.log('please enter a valid number')
    }
    return floorLength;
}
var result = brickCalculator(45);
console.log(result);


// 4. Tiny Friend

function tinyFriend(friends) {
    var shortest = undefined; 
    if (friends.length > 0) {
      for (i = 0; i < friends.length; i++) {
        if (typeof friends[i] == 'string' && (shortest == undefined ||friends[i].length < shortest.length )) {
          shortest = friends[i];
        }
      }
    }
  
    return shortest;
  }
  
  var name = tinyFriend(['Noboni', 'Arafin', 'Ben', 'Nashita', 'Taseen', 'Eliza', 'Stephen']);
  console.log('Your tiny friend is' + ' ' + name);
