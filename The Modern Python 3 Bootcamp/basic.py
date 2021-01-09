# print("rock...")
# print("paper...")
# print("scissors...")

player1 = input("Player 1, make your move: ")
player2 = input("Player 2, make your move: ")

if player1 and player2:
    if player1 == "rock" and player2 == "scissors":
        print("PLAYER 1 WINS")
    elif player1 == "scissors" and player2 == "rock":
        print("PLAYER 2 WINS!")
    elif player1 == "scissors" and player2 == "paper":
        print("PLAYER 1 WINS!")
    elif player1 == "paper" and player2 == "scissors":
        print("PLAYER 2 WINS!")
    elif player1 == "paper" and player2 == "rock":
        print("PLAYER 1 WINS!")
    elif player1 == "rock" and player2 == "paper":
        print("PLAYER 2 WINS!")
else:
    print("Please enter rock, paper, or scissors!")
