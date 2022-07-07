def string_to_array(s):
    arr=[]
    word = ''
    for letter in s:
        if letter == ' ':
            arr.append(word)
            word = ''
        else:
            word = word + letter
    arr.append(word)
    return arr