/* Plays a Rock, Paper, Scissors game, human vs coputer, using a random number generator */

var userChoice = prompt("Do you choose rock, paper, or scissors?");

/* Validation to only allow rock, paper, scissors as input */

if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    console.log("You chose" + " " + userChoice);
}
else {
    throw new Error("Please only enter rock, paper, or scissors!");
   
}
var computerChoice = Math.random();

console.log(computerChoice);

if (computerChoice <= 0.34) {
    
    computerChoice = "rock";
}
else if (0.34 < computerChoice && computerChoice <= 0.66) {
    
    computerChoice = "paper";
    
}

else {
    
    computerChoice = "scissors";
    
}

var compare = function(choice1, choice2) {
   
    if (choice1 === choice2) {
       
        return "The result is a tie!";
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            
            return "rock wins";
        }
       
        else {
        
            return "paper wins";
        
        }
    }
    else if (choice1 === "paper") {
         
        if (choice2 === "rock") {
            
            return "paper wins";
        
        }
        
        else {
            
            return "scissors wins";
        }
        
     }
    else if (choice1 === "scissors") {
     
        if (choice2 === "paper") {
         
            return "scissors wins"
        }
        
        else {
            
            return "rock wins";
        }
        
    }

    else {

        return "Please enter only 'rock', 'paper', or 'scissors'.";
         }
    
};

compare(userChoice, computerChoice);


