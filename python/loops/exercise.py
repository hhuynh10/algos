# 1. Print First 10 natural numbers using while loop
i = 1
while i < 11:
    print(i)
    i = i + 1

# 2. Print the following pattern
def printPattern(num):
    for i in range(1, num+1):
        for j in range(1, i+1):
            print(j, end=' ')
        print("\n")

printPattern(5)

# 3. Calculate the sum of all numbers from 1 to a given number
def sum(num):
    total = 0
    for i in range(num+1):
        total = total + i
    print(total)

sum(10)

# 4. Write a program to print multiplication table of a given number
def multiplication(num, times):
    for i in range(num+1):
        i = i * times
        print(i)

multiplication(10, 3)

# 5. Display numbers from a list using loop
def display(list):
    for i in range(0, len(list)):
        if list[i] % 5 == 0:
            if list[i] > 500:
                break
            elif list[i] > 150:
                continue
        print(list[i])

display([12, 75, 150, 180, 145, 525, 50])

# 6. Count the total number of digits in a number
def countDigit(num):
    newNum = str(num)
    print(len(newNum))

countDigit(465734)

def countDigit2(num):
    counter = 0
    while num != 0:
        num = num // 10
        counter = counter + 1
    print(counter)

countDigit2(123)

# 7. Print the following pattern
def printPattern1(num):
    for i in range(num, 0, -1):
        for j in range(i, 0, -1):
            print(j, end=' ')
        print("\n")

printPattern1(5)

# 8. Print list in reverse order using a loop
def printReverseList(list):
    for i in range(len(list)-1, -1, -1):
        print(list[i])

printReverseList([10, 20, 30, 40, 50])

# 9. Display numbers from -10 to -1 using for loop
def displayNegativeNum():
    for i in range(-10, 0, 1):
        print(i)

displayNegativeNum()

# 10. Use else block to display a message “Done” after successful execution of for loop
def displayMessage(num):
    for i in range(num):
        print(i)
    else:
        print("Done!")

displayMessage(5)

# 11. Write a program to display all prime numbers within a range
def primeNum(startNum, endNum):
    for i in range(startNum, endNum+1):
        if i > 1:
            for j in range(2, i):
                if i % j == 0:
                    break
            else:
                print(i)

primeNum(25, 50)

# 12. Display Fibonacci series up to 10 terms
def printFibonacci(num):
    num1 = 0
    num2 = 1
    for i in range(num):
        print(num1, end=' ')
        res = num1 + num2

        num1 = num2
        num2 = res

printFibonacci(11)

# 13. Find the factorial of a given number
def factorial (num):
    total = 1
    for i in range(1, num+1):
        total = total * i
    print(total)

factorial(5)

# 14. Reverse a given integer number
def reverseNum(num):
    numStr = str(num)
    reversedNum = numStr[::-1]
    print(reversedNum)

reverseNum(1234)

# 15. Use a loop to display elements from a given list present at odd index positions
def oddIndexPosition(list):
    for i in range(0, len(list)):
        if i % 2 != 0:
            print(list[i])

oddIndexPosition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])

# 16. Calculate the cube of all numbers from 1 to a given number
def cube(num):
    for i in range(1, num+1):
        cube = i * i * i
        print(f"Current Number is : {i} and the cube is {cube}")

cube(6)

# 17. Print the following pattern
def printPattern2(num):
    str = ""
    for i in range(1, num+1):
        for j in range(1, i + 1):
            str = str + "*"
        str = str + "\n"
    print(str)

    for n in range(num-1, 0, -1):
        for m in range(n, 0, -1):
            str = str + "*"
        str = str + "\n"
    print(str)

printPattern2(5)