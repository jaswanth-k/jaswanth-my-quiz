var readlineSync = require("readline-sync");
var nameOfPlayer = readlineSync.question("Please enter your name: ");

console.log("Hi " + nameOfPlayer + "! Welcome to How Well Do You know Me?");

var qna1 = {ques : "Where do I live? ", ans : "gudur"};
var qna2 = {ques : "Where do I work? ", ans : "tcs"};
var qna3 = {ques : "Who is my favorite Superhero? ", ans : "thor"};
var qna4 = {ques : "What is my lucky number? ", ans : "2"};
var qna5 = {ques : "What is my favorite colour? ", ans : "black"};

var qnaArray = [qna1,qna2,qna5,qna4,qna3];
var level1 = 3;

function quiz(qnaArray){
  var score = 0;
  console.log("Rules of the quiz:\n"+"1.This quiz consists of 2 levels.\nLevel 1 = 3 Questions\nLevel 2 = 2 Questions\nYou are now in the Level 1 of this quiz.\n"+"2.Answer 3 questions correctly to advance into Level 2.");
  console.log("---------------------------------------------------------");

  for(let i=0;i<qnaArray.length;i++){

    var inputAns = readlineSync.question(qnaArray[i].ques);
    if (inputAns == qnaArray[i].ans){
      console.log("Yeah you got it right!!");
      score++;
      console.log("Your score is "+score);
      console.log("----------------------------------------");
    }
    else{
      console.log("Nope! You are wrong.")
      console.log("Your score is "+score);
      console.log("----------------------------------------");
    }
    if(i===level1-1 && score === 3){
      console.log("Congratulations!! You now advance into Level 2 of this quiz.");
    
    }
    if(i===level1-1 && score<3){
      console.log("Sorry "+nameOfPlayer+", You can't advance to Level 2.\nThanks for playing.")
      break;
    }

  }
  if(score === 5){
    console.log("Woah!! You are perfect "+nameOfPlayer+". Cheers!");
  }
  else if(score>2 && score<5){
    console.log("Well played "+nameOfPlayer+".Thanks for playing.")
  }

}

quiz(qnaArray);