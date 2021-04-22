def moveElementToEnd(array, toMove):
    # Write your code here.
    start = 0
    end = len(array)-1

    while start < end:
        if array[start] == toMove and array[end] != toMove:
            array[start], array[end] = array[end], array[start]
            start += 1
            end -= 1
        elif array[start] == toMove and array[end] == toMove:
            end -= 1
        elif array[start] != toMove and array[end] == toMove:
            end -= 1
            start += 1
        elif array[start] != toMove and array[end] != toMove:
            start += 1
    return array
