def binary_array_to_number(arr):
    number = 0
    power = len(arr) - 1
    for x in arr:
        if x != 0:
            number += 2**power
        power-=1
    return number