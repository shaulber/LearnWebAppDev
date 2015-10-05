/**
 * Created by shaulberkovich on 10/5/15.
 */
var main = function(){
    "use srtict";

    //$("*").css("color","red");
    //$(".important").css("color","red");
    //$(".relavent p:nth-child(3)").css("color","red");
    //$("p").css("color","red");
    //$(".relavent").css("color","red");
    //$(".relavent p:nth-child(even)").css("color","red");
    //$("p:contains('seventh')").css("color","red");
    // $(".relavent p:gt(3)").css("color","red");
    $(".relavent p:not(.a)").css("color","red");

    var fizzbuzz = function(){
      for(var i=1;i<=100;i++) {
          if ((i % 3 === 0) && (i % 5) === 0) {
              console.log(i + "is a devider of 3 and 5");
          }
          else if (i % 3 === 0) {
              console.log(i + " is a devider of 3");
          }
          else if (i % 5 === 0) {
              console.log(i + " is a devider of 5");
          }
      }
    };
    var sum = function(nums){
        var tempNum =0;
        nums.forEach(function(value){
            tempNum += value;

        });
        console.log(tempNum);
    };
    var average = function(nums){
        var tempNum =0;
      nums.forEach(function(value){
          tempNum+=value;
      });
        console.log(tempNum / nums.length);
    };
    var largest = function(nums){
        var tempNum =0;
        nums.forEach(function(value){
            if(value > tempNum)
                tempNum = value;
        });
        console.log(tempNum);
    };
    var even = function(nums){
        nums.forEach(function(value){
            if(value %2 === 0) {
                return true;
            }
        });

        return false;
    };
    fizzbuzz();
    sum([1,2,3,4,5]);
    average([1,2,3,4,5]);
    largest([1,2,3,4,5]);
    console.log(even([1,2,3,4,5]));

};
$(document).ready(main);