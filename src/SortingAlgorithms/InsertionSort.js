export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSort(array, array.length, animations);
    return animations;
}


function insertionSort(array, sizeOfArray, animations) {
    let i, key, j;
    for (i = 1; i < sizeOfArray; i++) {
        key = array[i];
        j = i - 1;

        // Move elements of arr[0..i-1], 
        // that are greater than key, to one
        // position ahead of their
        // current position
        while (j >= 0 && array[j] > key) {
            animations.push([i, j, false]);
            animations.push([i, j, false]);
            animations.push([j + 1, array[j], true])
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push([j + 1, key, true]);
        array[j + 1] = key;
    }
}