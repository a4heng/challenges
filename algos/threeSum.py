def threeNumberSum(array, targetSum):
    # Write your code here.
    array.sort()
    result = []
    for i in range(len(array) - 2):
        front = i + 1
        end = len(array) - 1
        while front < end:
            currentSum = array[i] + array[front] + array[end]
            if currentSum == targetSum:
                result.append([array[i], array[front], array[end]])
                front += 1
                end -= 1
            elif currentSum < targetSum:
                front += 1
            elif currentSum > targetSum:
                end -= 1
    return result
