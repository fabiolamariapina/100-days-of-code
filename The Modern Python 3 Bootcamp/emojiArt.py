# create emoji art with a for loop and a while loop
# 10 rows of emojis
# row 1- 1 emoji, row 2-2 emojis and so on

# FOR LOOP
for x in range(1, 11):
    print(("\U0001F600") * x)

# WHILE LOOP
x = 1

while x < 11:
    print(("\U0001F600") * x)
    x += 1
