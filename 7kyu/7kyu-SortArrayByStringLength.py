def sort_by_length(arr):
    output = []
    for i in range(len(arr)):
        if i == 0:
            output.append(arr[i])
        else:
            length_i = len(arr[i])
            added = False
            for j in range(len(output)):
                length_j = len(output[j])
                if length_i < length_j and added == False:
                    output.insert(j,arr[i])
                    added = True
                elif j == len(output)-1 and added == False:
                    output.append(arr[i])
                    added = True
    return output