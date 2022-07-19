def name_shuffler(str_):
    first = ''
    last = ''
    space = False
    for c in str_:
        if c == ' ':
            space = True
        elif space:
            first = first + c
        else:
            last = last + c
    shuffled = first + ' ' + last
    return shuffled