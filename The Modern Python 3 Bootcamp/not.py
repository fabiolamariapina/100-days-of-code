age = 2
# 2-8 $2
# > 65 $5
# else $10

if not ((age >= 2 and age <= 8) or age >= 65):
    print("YOU PAY 10 DOLLARS")
else:
    print("YOU ARE A CHILD OR SENIOR")
