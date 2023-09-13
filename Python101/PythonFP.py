#Python 101 FP

import random

options=['rock','paper','scissors']

while(True):
    
    input_choice= input('Choose: rock, paper or scissors: ')
    input_choice=input_choice.lower()
    
    if input_choice == "quit":
        print("\nBye!!")
        break
    
    if  input_choice != "rock" and   input_choice != "paper" and   input_choice!="scissors":
        print("Please choose a correct answer...\n")
        continue
    
    computer_choice = random.choice(options)
    print(f"Computer chose: {computer_choice}")
    
    if input_choice==computer_choice:
        print ("It's a tie!\n")
        break
    elif input_choice=="paper" and computer_choice=="rock":
        print ('You won!\n')
        break
    elif input_choice=="rock" and computer_choice=="scissor":
        print("You Won!\n")
        break
    elif input_choice=="scissor" and computer_choice=="paper":
        print("You Win!\n")
        break
    else:
        print("You lose. Try again!")