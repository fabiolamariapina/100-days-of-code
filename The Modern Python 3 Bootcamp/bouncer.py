# ask for age
age = input("How old are you: ")

if age != "":
    # 18-21 wristband
    if int(age) >= 18 and int(age) < 21:
        print("You can enter, but need a wrsitband!")
    # 21+ drink, normal entry
    elif int(age) >= 21:
        print("You can enter and drink")
    # too young, sorry
    else:
        print("You're too young")
else:
    print("Please enter an age!")
