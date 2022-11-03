export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations;
}


function partition(
    mainArray,
    low,
    high,
    animations,
) {
    let pivot = mainArray[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        animations.push([j, j, false]);
        animations.push([j, j, false]);
        if (mainArray[j] < pivot) {
            i++;
            animations.push([i, mainArray[j], true]);
            animations.push([j, mainArray[i], true]);
            let temp = mainArray[i];
            mainArray[i] = mainArray[j];
            mainArray[j] = temp;
        }
    }
    animations.push([i + 1, mainArray[high], true]);
    animations.push([high, mainArray[i + 1], true]);
    let temp = mainArray[i + 1];
    mainArray[i + 1] = mainArray[high];
    mainArray[high] = temp;
    return (i + 1);
}


function quickSortHelper(
    mainArray,
    low,
    high,
    animations,
) {
    if (low < high) {
        let pi = partition(mainArray, low, high, animations);
        quickSortHelper(mainArray, low, pi - 1, animations);
        quickSortHelper(mainArray, pi + 1, high, animations);
    }
}