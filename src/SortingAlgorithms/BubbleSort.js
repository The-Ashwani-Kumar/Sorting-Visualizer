export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, array.length, animations);
    return animations;
}


function bubbleSort(
    mainArray,
    sizeOfArray,
    animations,
) {
    let i = 0, j = 0;
    for (i = 0; i < sizeOfArray - 1; i++) {
        for (j = 0; j < sizeOfArray - i - 1; j++) {
            animations.push([j, j + 1, false]);
            animations.push([j, j + 1, false]);
            if (mainArray[j] > mainArray[j + 1]) {
                animations.push([j, mainArray[j + 1], true]);
                animations.push([j + 1, mainArray[j], true]);
                let temp = mainArray[j];
                mainArray[j] = mainArray[j + 1];
                mainArray[j + 1] = temp;
            }
        }
    }
}