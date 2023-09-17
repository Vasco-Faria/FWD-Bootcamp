##Python 301


class Bank:
    
    def __init__(self):
        print("\nHi welcome to the Bank!")
        print("Lets open an account for you!")
        name=input("Whats your name?: ")
        initial_ammount=float(input("Whats the initial ammount?: "))
        self.balance= initial_ammount
        self.name=name
        
        with open(f"{self.name}_Transactions.txt","w") as file:
            file.write(f"Transactions from {self.name} account:\n\n")
        
        
    def log_transactions(self,transaction_string):
        with open(f"{self.name}_Transactions.txt","a") as file:
            file.write(f"{transaction_string}")
        
    def withdrawl(self,amount):
        try:
            amount=float(amount)
        except ValueError:
            amount=0
        if amount:
            self.balance-=amount
            print(f"+ The Withdrawal was sucessfully!!")
            self.log_transactions(f"Withdrew {amount}$\n")
        
        
    def deposit(self,amount):
        try:
            amount=float(amount)
        except ValueError:
            amount=0
        if amount:
            self.balance+=amount
            print(f"- The deposit was sucessfully!!")
            self.log_transactions(f"Deposit {amount}$\n")
        
    def print_balance(self):
        print(f"\nThe balance of this account is {self.balance}$\n")
        
        
account= Bank()


while True:
    
    print("\nWhat would you like to do?")
    print("1. Deposit")
    print("2. Withdrawl")
    print("3. Print Balance")
    print("4. Exit")
    choice=input("Enter your choice: ")
    
    if choice=="1":
        amount=input("How much would you like to deposit?: ")
        account.deposit(amount)
    elif choice=="2":
        amount=input("How much would you like to withdrawl?: ")
        account.withdrawl(amount)
    elif choice=="3":
        account.print_balance()
    elif choice=="4":
        account.print_balance()
        account.log_transactions(f"Account amount: {account.balance}$",)
        print("Thank you for using our bank!")
        break
    else:
        print("Invalid choice, please try again!")
