def no_boring_zeros(n):
    negative = False
    if n < 0:
        n = n * -1
        negative = True
    narr = [int(x) for x in str(n)]
    i = len(narr) - 1
    while i >= 0:
        if narr[i] == 0:
            narr.pop(i)
        else:
            i = 0
        i = i-1
    if len(narr) < 1:
        n = 0
    else:
        nstr = ''.join(str(x) for x in narr)
        n = int(nstr)
    if negative:
        return n * -1
    else:
        return n
    
        