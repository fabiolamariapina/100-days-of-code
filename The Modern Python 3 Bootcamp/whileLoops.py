# EXAMPLE #1 -> askin for user input
# msg = input("What's the secret password?")

while msg != "bananas":
    print("WRONG!")
    msg = input("What's the secret password?")
print('CORRECT!')

# EXAMPLE 2 -> FOR LOOP TO WHILE LOOP
# for loop
# for num in range(1, 11):  # -> # counts numbers 1-10
#     print(num)
# while loop version of foor loop above
num = 1
while num < 11:
    print(num)
    num += 1
