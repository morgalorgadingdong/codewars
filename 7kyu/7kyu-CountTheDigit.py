def nb_dig(n, d):
    k = 0
    l = 0
    count = 0
    while l <= n:        
        k_str = str(k)
        for x in k_str:
            if int(x) == d:
                count += 1
        l += 1
        k = l*l
    return count