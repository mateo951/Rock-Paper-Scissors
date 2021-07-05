function getComputerPick()
{
    let randomPick = Math.round(Math.random() * 2);
    switch(randomPick)
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
function game(playerPick)
{
    let computerPick = getComputerPick();
    console.log("Player pick is "+playerPick);
    console.log("Computer pick is "+computerPick);
    if(playerPick ===computerPick)
    {
        console.log("Tie! Roll again");
    }
    else if (playerPick === "Rock" && computerPick === "Scissors")
    {
        console.log("Player wins! Rocks beats Scissors");
    }
    else if (playerPick === "Paper" && computerPick === "Rock")
    {
        console.log("Player wins! Paper beats Rock");
    }
    else if (playerPick === "Scissors" && computerPick === "Paper")
    {
        console.log("Player wins! Scissors beats Paper");
    }
    else if (playerPick === "Scissors" && computerPick === "Rock")
    {
        console.log("Computer wins! Rocks beats Scissors");
    }
    else if (playerPick === "Rock" && computerPick === "Paper")
    {
        console.log("Computer wins! Paper beats Rock");
    }
    else if (playerPick === "Paper" && computerPick === "Scissors")
    {
        console.log("Computer wins! Scissors beats Paper");
    }

}