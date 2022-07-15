def small_enough(array, limit):
    validArr = True
    for x in array:
        if x > limit:
            validArr = False
    return validArr