def smallestDifference(arrayOne, arrayTwo):
    # Write your code here.
    arrayOne.sort()
    arrayTwo.sort()
    idx_1 = 0
    idx_2 = 0
    small = float('inf')
    diff = float('inf')
    pair = []
    while idx_1 < len(arrayOne) and idx_2 < len(arrayTwo):
        one = arrayOne[idx_1]
        two = arrayTwo[idx_2]
        if one < two:
            diff = two - one
            idx_1 += 1
        elif two < one:
            diff = one - two
            idx_2 += 1
        else:
            return [one, two]

        if diff < small:
            small = diff
            pair = [one, two]

    return pair
