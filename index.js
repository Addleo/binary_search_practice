function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const sortedArray = [1, 3, 3, 5, 5, 5, 7, 13, 15, 17];
const target = 7;
const result = binarySearch(sortedArray, target);
console.log(`Target ${target} found at index: ${result}`);
