def filter_list(l):
    output = []
    for x in l:
        if isinstance(x, str) == False:
            output.append(x)
    return output