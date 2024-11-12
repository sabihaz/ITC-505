document.getElementById("sortButton").addEventListener("click", function() {
    let numbers = [5, 3, 8, 4, 2];  // Fixed array to be sorted
    console.log("Original Array:", numbers);  // Log the original array
    let sortedNumbers = bubbleSort(numbers);  // Sort the array
    console.log("Sorted Array:", sortedNumbers);  // Log the sorted array
    document.getElementById("output").textContent = "Sorted Array: " + sortedNumbers.join(", ");
});

// Bubble Sort function
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
