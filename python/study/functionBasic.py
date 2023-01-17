# Countdown
list = []
def countdown(num):
    for i in range(num, -1, -1):
        list.append(i)
    print(list)
    return list
    
countdown(10)

# Print and Return
def printAndReturn(num1, num2):
    print(num1)
    return num2

printAndReturn(5, 1)

# First Plus Length
def firstPlusLength(list):
    sum = list[0] + len(list)
    print(sum)
    return sum

firstPlusLength([1,2,3,4,5])

# Values Greater than Second 
newList = []
def valuesGreaterThanSecond(list):
    if (len(list) < 2):
        print(False)
        return False
    for i in range(0, len(list)):
        if list[i] > list[1]:
            newList.append(list[i])
    print(newList)
    return newList

valuesGreaterThanSecond([5,2,3,2,1,4])
valuesGreaterThanSecond([3])

# This Length, That Value
newList1 = []
def thisLengthThatValue(size, value):
    for i in range(1, size + 1):
        newList1.append(value)
    print(newList1)

thisLengthThatValue(6, 2)
