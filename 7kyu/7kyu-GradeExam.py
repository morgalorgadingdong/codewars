def check_exam(arr1,arr2):
    score = 0
    exam_length = len(arr1)
    for x in range(0,exam_length):
        if arr1[x] == arr2[x]:
            score = score + 4
        elif arr2[x] != '':
            score = score - 1
    if score < 0:
        return 0
    else:
        return score