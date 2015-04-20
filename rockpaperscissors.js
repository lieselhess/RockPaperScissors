/* Plays a Rock, Paper, Scissors game, human vs coputer, using a random number generator */

var userChoice = prompt("Do you choose rock, paper, or scissors?");

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
    
    
};

compare(userChoice, computerChoice);