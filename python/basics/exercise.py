# 1. Calculate the multiplication and sum of two numbers
def multiplication(num1, num2):
    product = num1 * num2
    if product <= 1000:
        product = num1 + num2
    print(product)

multiplication(20, 30)
multiplication(200, 30)

# 2 Print the sum of the current number and the previous number
for i in range(1, 11):
    sum = i + (i-1)
    print(f"Current Number: {i}, Previous Number: {i-1}, Sum: {sum}")

# 3. Print characters from a string that are present at an even index number
def printChar(str):
    for i in range(0, len(str)):
        if i % 2 == 0:
            print(str[i])

printChar("pynative")

# 4. Remove first n characters from a string
def removeToIndex(str, index):
    newStr = ''
    for i in range(index, len(str)):
        newStr = newStr + str[i]
    print(newStr)

removeToIndex("pynative", 2)

# 5. Check if the first and last number of a list is the same
def check(list):
        if list[0] == list[len(list) - 1]:
            print(True)
        else:
            print(False)

check([10, 20, 30, 40, 10])
check([75, 65, 35, 75, 30])

# 6. Display numbers divisible by 5 from a list
def display(list):
    for i in range(0, len(list)):
        if list[i] % 5 == 0:
            print(list[i])

display([10, 20, 33, 46, 55])

# 7. Return the count of a given substring from a string
def countSubstring(str, value):
    num = str.count(value)
    print(f"{value} appeared {num} times")

countSubstring("Emma is good developer. Emma is a writer", "Emma")

# 8. Print the following pattern
def printPattern(num):
    for i in range(num):
        for j in range(i):
            print(i, end= " ")
        print("\n")

printPattern(6)

# 9. Check Palindrome String
def isPal(str):
    for i in range(0, len(str)):
        if str[i] != str[len(str)-i-1]:
            return False
    return True

print(isPal("malayalam"))

# 10. Create a new list from a two list using the following condition
def addList(list1, list2):
    list = []
    for i in range(0, len(list1)):
        if list1[i] % 2 != 0:
            list.append(list1[i])
    for j in range(0, len(list2)):
        if list2[j] % 2 == 0:
            list.append(list2[j])
    print(list)

addList([10, 20, 25, 30, 35], [40, 45, 60, 75, 90])

# 11. Write a Program to extract each digit from an integer in the reverse order.
def reverseNum(num):
    newStr = str(num)
    reversedNum = newStr[::-1]
    print(reversedNum)

reverseNum(7536)

# 12. Print multiplication table form 1 to 10
def printMultiplication(num):
    for i in range(1, num + 1):
        for j in range(1, num + 1):
            print(j * i , end = ' ')
        print("\n")


printMultiplication(10)

# 13. Print downward Half-Pyramid Pattern with Star
def printPattern(num):
    str = ""
    for i in range(num, 0, -1):
        for j in range (i, 0, -1):
            str = str + "*"
        str = str + "\n"
    print(str)

printPattern(10)

# 14. Write a function called exponent(base, exp) that returns an int value of base raises to the power of exp.
def exponent(base, exp):
    total = 1
    for i in range(0, exp):
        total = total * base
    print(total)

exponent(2, 5)

# 15. Write a function that calculates the number of occurences of words in the above string and prints it in "container" above.
testString = "Cats conserve energy by sleeping more than most animals, especially as they grow older. The daily duration of sleep varies, usually between 12 and 16 hours, with 13 and 14 being the average. Some cats can sleep as much as 20 hours. The term 'cat nap' for a short rest refers to the cat's tendency to fall asleep (lightly) for a brief period. While asleep, cats experience short periods of rapid eye movement sleep often accompanied by muscle twitches, which suggests they are dreaming. Outdoor cats are active both day and night, although they tend to be slightly more active at night. To aid with navigation and sensation, cats have dozens of movable whiskers (vibrissae) over their body, especially their faces. These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents; they also trigger protective blink reflexes to protect the eyes from damage."

def wordOccurence(str):
    newStr = str.lower().split()
    for i in range(0, len(newStr)):
        count = 0
        for j in range(0, len(newStr)):
            if newStr[i] == newStr[j]:
                count = count + 1
        print(f"{newStr[i]}: {count}")

wordOccurence(testString)
