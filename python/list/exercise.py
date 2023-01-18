# 1. Reverse a list in Python
def reverseList(list):
    newList = list[::-1]
    print(newList)

reverseList([100, 200, 300, 400, 500])

# 2. Concatenate two lists index-wise
def concatenate(list1, list2):
    list = [i + j for i, j in zip(list1, list2)]
    print(list)

concatenate(["M", "na", "i", "Ke"], ["y", "me", "s", "lly"])

# 3. Turn every item of a list into its square
def square(list):
    newList = []
    for val in list:
        num = val * val
        newList.append(num)
    print(newList)

square([1, 2, 3, 4, 5, 6, 7])

# 4. Concatenate two lists in the following order
def concatenate1(list1, list2):
    list = []
    for val1 in list1:
        for val2 in list2:
            list.append(val1 + val2)
    print(list)

concatenate1(["Hello ", "take "], ["Dear", "Sir"])

# 5. Iterate both lists simultaneously
def iteration(list1, list2):
    for x, y in zip(list1, list2[::-1]):
        print(x, y)

iteration([10, 20, 30, 40], [100, 200, 300, 400])

# 6. 