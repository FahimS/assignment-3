
//Qus-1  Ans:
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);




//Qus-2 Ans:
function budgetCalculator(watch, mobile, laptop) {

    var cost = watch * 50 + mobile * 100 + laptop * 500;

    return cost;
}
var result = budgetCalculator(2, 2, 2);
console.log(result);





//Qus-3 Ans:
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstTenDaysCost = 10 * 100;
        var remaining = day - 10;
        var secondTenDaysCost = remaining * 80;
        cost = firstTenDaysCost + secondTenDaysCost;
    }
    else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        remaining = day - 20;
        var afterTwentyDaysCost = remaining * 50;
        cost = secondTenDaysCost + secondTenDaysCost + afterTwentyDaysCost;
    }
    return cost;
}

var result = hotelCost(20);
console.log(result);





//Qus-4 Ans:
function megaFriend(friendsName) {
    var maxName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element > maxName) {
            maxName = element;
        }
    }
    return maxName;
}
var friendsName = ["Fahim", "Shahriar", "Setu"];
var result = megaFriend(friendsName);
console.log(result);

