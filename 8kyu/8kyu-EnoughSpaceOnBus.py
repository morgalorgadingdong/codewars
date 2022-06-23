def enough(cap, on, wait):
    delta = cap - on - wait
    if delta < 0:
        return -delta
    else:
        return 0