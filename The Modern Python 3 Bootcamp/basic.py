player1 = input("Player 1, make your move: ")
player2 = input("Player 2, make your move: ")

player1 = player1.lower()
player2 = player2.lower()

if player1 and player2:
    if (player1 == "rock" and player2 == "scissors") or (player1 == "scissors" and player2 == "paper") or (player1 == "paper" and player2 == "rock"):
        print("PLAYER 1 WINS")
    elif (player1 == "scissors" and player2 == "rock") or (player1 == "paper" and player2 == "scissors") or (player1 == "rock" and player2 == "paper"):
        print("PLAYER 2 WINS!")
    elif player1 == player2:
        print("IT'S A TIE! (insert surprised pikachu here)")
    else:
        print("SAY WHAT??")
else:
    print("Please enter rock, paper, or scissors!")
