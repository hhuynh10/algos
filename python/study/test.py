string = "I hate you"

strArray = string.split(" ")

print(strArray)

string1 = " ".join(strArray)

print(string1)

print(string.find("hate"))
print(string.endswith("e"))
print(string.isalpha())


strArray1 = strArray[:]

print(strArray1.index('hate'))

for i in range(1, 21):
    print(f"Number: {i}")


count = 0
while count <= 5:
    print("looping - ", count)
    count += 1

my_list = ["abc", 123, "xyz"]
for i in range(0, len(my_list)):
    print(i, my_list[i])

for v in my_list:
    print(v)

for val in "string":
    if val == "i":
        break
    print(val)

for val in "string":
    if val == "i":
        continue
    print(val)

def sum(a, b):
    return a + b

print(sum(1, 3))

