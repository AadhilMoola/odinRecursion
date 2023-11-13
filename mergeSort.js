function mergeSort(array) {
    // Base case: If the array has 0 or 1 elements, it's already sorted
    if (array.length <= 1) {
      return array;
    }
  
    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
  
    // Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves back together
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both arrays and push the smaller one into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements from both arrays (if any)
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [64, 2, 12, 22, 11];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); 
  