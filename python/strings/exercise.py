# 1A. Create a string made of the first, middle and last character
def createStr(str):
    newStr = ''
    newStr = newStr + str[0] + str[len(str)-1] + str[len(str) // 2]
    print(newStr)

createStr("James")

# 1B. Create a string made of the middle three characters
def createStr1(str):
    newStr = ''
    newStr = str[(len(str) // 2)-1] + str[len(str) // 2] + str[(len(str) // 2)+1]
    print(newStr)

createStr1("JhonDipPeta")
createStr1("JaSonAy")

# 2. Append new string in the middle of a given string
def addString(str1, str2):
    newStr = str1 + str2
    print(newStr)

addString("Ault", "Kelly")

# 3. Create a new string made of the first, middle, and last characters of each input string
def addString1(str1, str2):
    newStr = str1 + str2[0] + str2[len(str2)-1] + str2[len(str2) // 2]
    print(newStr)

addString1("America", "Japan")

# 4. Arrange string characters such that lowercase letters should come first
def arrangeChar(str):
    newStr = ''
    for i in range(0, len(str)):
        if str[i].islower():
            newStr = newStr + str[i]
    for i in range(0, len(str)):
        if not str[i].islower():
            newStr = newStr + str[i]
    print(newStr)

arrangeChar("PyNaTive")

# 5. Count all letters, digits, and special symbols from a given string
def count (str):
    chars = 0
    digits = 0 
    symbol = 0
    for i in range(0, len(str)):
        if str[i].isalpha():
            chars = chars + 1
        if str[i].isdigit():
            digits = digits + 1
        if not str[i].isalpha() and not str[i].isdigit():
            symbol = symbol + 1
    print(f"Chars: {chars}\nDigits: {digits}\nSymbols: {symbol}")

count("P@#yn26at^&i5ve")

# 6. String characters balance Test
def balanceTest(str1, str2):
    flag = True
    print(flag)
    for char in str1:
        if char in str2:
            continue
        else:
            flag = False
            print(flag)
    return flag


balanceTest("Yn", "PYnative")
balanceTest("Ynf", "PYnative")

# 7. Find all occurrences of a substring in a given string by ignoring the case
def findOccurence(str, substr):
    newstr = str.upper()
    num = newstr.count(substr)
    print(f"{substr} appeared {num} times")

findOccurence("Welcome to USA. usa awesome, isn't it?", "USA")

# 8. Calculate the sum and average of the digits present in a string
def sumAndAverage(str):
    count = 0
    sum = 0
    for i in range(len(str)):
        if str[i].isdigit():
            sum = sum + int(str[i])
            count = count + 1
    avg = sum / count
    print(f"Sum is: {sum} Average is: {avg}")

sumAndAverage("PYnative29@#8496")

# 9. Write a program to count occurrences of all characters within a string
def countOccurence(str):
    for i in str:
        count = 0
        for j in str:
            if i == j:
                count = count + 1
        print(f"{i} : {count}")

countOccurence("Apple")

def countOccurence1(str):
    for i in str:
        num = str.count(i)
        print(f"{i} : {num}")

countOccurence1("Apple")

# 10. Reverse a given string
def reversestr(str):
    newStr = str[::-1]
    print(newStr)

reversestr("Emma is a data scientist who knows Python. Emma works at google.")