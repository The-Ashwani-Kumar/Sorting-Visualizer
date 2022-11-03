export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSort(array, array.length, animations);
    return animations;
}


function selectionSort(
    mainArray,
    sizeOfArray,
    animations,
) {
    let i = 0, j = 0;
    for (i = 0; i < sizeOfArray - 1; i++) {
        let min_index = i;
        for (j = i + 1; j < sizeOfArray; j++) {
            animations.push([i, j, false]);
            animations.push([i, j, false]);
            if (mainArray[j] < mainArray[min_index]) {
                min_index = j;
            }
        }
        if (min_index != i) {
            animations.push([i, mainArray[min_index], true]);
            animations.push([min_index, mainArray[i], true]);
            let temp = mainArray[i];
            mainArray[i] = mainArray[min_index];
            mainArray[min_index] = temp;
        }
    }
    for(let i=0;i<sizeOfArray;i++)
        console.log(mainArray[i]);
}