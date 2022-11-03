import React, { useState } from 'react';
import { Slider } from "@material-ui/core";
import { getMergeSortAnimations } from '../SortingAlgorithms/MergeSort.js';
import { getBubbleSortAnimations } from '../SortingAlgorithms/BubbleSort.js';
import { getSelectionSortAnimations } from '../SortingAlgorithms/SelectionSort.js';
import { getInsertionSortAnimations } from '../SortingAlgorithms/InsertionSort.js';
import { getQuickSortAnimations } from '../SortingAlgorithms/QuickSort.js';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 1;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = window.innerWidth / 8;
const HEIGHT_OF_BARS = window.innerHeight / 1.4;
const PRIMARY_COLOR = 'turquoise';
const my_color = 'pink';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };

    }

    componentDidMount() {
        this.resetArray();
        ANIMATION_SPEED_MS = 100;
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomFromIntervals(5, HEIGHT_OF_BARS));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        const n = animations.length;
        for (let i = 0; i < n; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, check] = animations[i];
            const isColorChange = check;
            if (!isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 == 0 ? SECONDARY_COLOR : my_color;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [index, newHeight] = animations[i];
                    const barOneStyle = arrayBars[index].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }
    }

    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, check] = animations[i];
            const isColorChange = check;
            if (!isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [index, newHeight] = animations[i];
                    const barOneStyle = arrayBars[index].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, check] = animations[i];
            const isColorChange = check;
            if (!isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 2 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [index, newHeight] = animations[i];
                    const barOneStyle = arrayBars[index].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        // colorBlue();
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        const n = animations.length;
        console.log(NUMBER_OF_ARRAY_BARS);
        for (let i = 0; i < n; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, check] = animations[i];
            const isColorChange = check;
            if (!isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 == 0 ? SECONDARY_COLOR : my_color;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [index, newHeight] = animations[i];
                    const barOneStyle = arrayBars[index].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }
    }

    // NOTE: This method will only work if your sorting algorithms actually return
    // the sorted arrays; if they return the animations (as they currently do), then
    // this method will be broken.
    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomFromIntervals(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomFromIntervals(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = getMergeSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render() {
        const {
            array,
            val,
        } = this.state;

        const updateRange = (e, data) => {
            ANIMATION_SPEED_MS = 100 - data;
        };

        return (

            <div className='array-container'>
                <div className="my-header">
                    <div className='heading'>Visual Sort</div>
                    <div className="toolbar">
                        <div className="navbar">
                            <button className='nav-btn' id="reset" onClick={() => this.resetArray()}> New Array </button>
                            <button className='nav-btn' onClick={() => this.bubbleSort()}>            Bubble Sort </button>
                            <button className='nav-btn' onClick={() => this.insertionSort()}>         Insertion Sort </button>
                            <button className='nav-btn' onClick={() => this.mergeSort()}>             Merge Sort </button>
                            <button className='nav-btn' onClick={() => this.quickSort()}>             Quick Sort </button>
                            <button className='nav-btn' onClick={() => this.selectionSort()}>         Selection Sort </button>
                        </div>
                        <div className='array-speed'>
                            <span> Speed : {100 - ANIMATION_SPEED_MS} </span>{" "}
                            <Slider className="slider" value={val} onChange={updateRange} />
                        </div>
                    </div>
                </div>
                <div className='all-bars'>
                    {
                        array.map((value, index) => {
                            return (
                                <div className="array-bar" style={{ height: `${value}px` }} key={index} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

function randomFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}


export default SortingVisualizer