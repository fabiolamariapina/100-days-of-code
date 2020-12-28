# ask user for how much they ran in kms
print("How many kilometers did you cycle today?")
kms = input()
# convert user input from string to float to do math
# 1.60934 miles in 1 km
# create a new variable called miles that will convert
# user input of kms to miles
miles = float(kms)/1.60934
# round result of equation above
# round(variable/thing to round, how many decimal points to round it to)
miles = round(miles, 2)
# program will respond with user input
print(f"Your {kms}km ride was {miles}mi ")
