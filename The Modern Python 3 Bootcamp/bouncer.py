# ask for age
age = input("How old are you: ")

if age:
    # make user input an int
    age = int(age)
    # 21+ drink, normal entry
    if age >= 21:
        print("You can enter and drink")
    # 18-21 wristband
    elif age >= 18:
        print("You can enter, but need a wrsitband!")
    # too young, sorry
    else:
        print("You're too young")
else:
    print("Please enter an age!")
