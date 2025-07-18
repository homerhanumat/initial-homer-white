---
title: "Advent of Code 2022, Day 1:  A Solution Using Javascript"
description: ""
omit_header_text: true
featured_image: images/shiva_moon_landscape.jpg
summary: "A sample programming article."
type: page
weight: 2
---


## Introduction to the Problem

We describe a solution, in the JavaScrpt running in the Node environment, to the Day 1 problem of the 2022 edition of the highly-popular Advent of Code challenge.

The problem is described in full [here](https://adventofcode.com/2022/day/1).  (The reader may need to create an account in order to view it.)  A band of elves is on a quest to provide energy to santa's reindeer.  Their quest begins with a hike through a jungle area. Below is an excerpt from the Advent of Code website that describes the problem.

<blockquote>
The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).

The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

For example, suppose the Elves finish writing their items' Calories and end up with the following list:

```
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
```

This list represents the Calories of the food carried by five Elves:


* The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
* The second Elf is carrying one food item with 4000 Calories.
* The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
* The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
* The fifth Elf is carrying one food item with 10000 Calories.

In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

Find the Elf carrying the most Calories. *How many total Calories is that Elf carrying?*

</blockquote>

In the remainder of the article we provide a detailed explanation of the solution-code.

## Reading in the Data

Suppose that the problem data is contained in a file called `input.txt` located in the same dirctory as the JavaScript file, for example:

```
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
```

We will be importing data from a source outside the Node envionment, so we'll be working with file-systems.  Accordingly, we import the `fs` and `path` modules:

```js
const fs = require("fs");
const path = require("path");
```

### Determining the Pathname of the Input File

We now use the functionality of the `path` module to construct a string that gives the pathname of the `input.txt` file.  

```js
let targetFile = path.resolve(__dirname, "input.txt");
```

In the above code, `__dirname` evaluates to the full name of the directory containing the file being run, and `path.resolve` puts it together with the second argument
to get the full pathnamename of the input file.

### Reading in the Input File

Next, we use the `fs` module tp read in the file, and the we and convert it to a string:

```js
const input = fs.readFileSync(targetFile).toString();
```

### Processing the Input File

We wish to convert the string into an array of values, where each element of the array is the calorie-value of an item.

To this end, we must split the string along the newlines within it.  To this end we define a splitting function:

```js
const splitLines = str => str.split(/\n/);
```

Note the use of the Javacript regular expression `/\n/`).  (In Javascript regular expressions to not start life as strings, as they do in R.  Instead they are a special type of object, delimited by the forward-slash: `/`.  For more on regular expressions in JavaScript, see [Chapter 8](https://eloquentjavascript.net/09_regexp.html) of the *Eloquent JavaScript* textbook.)

We now apply the function to split the input into an array of strings;

```js
const caloriesAsStrings = splitLines(input);
```

The array is full of strings.  (Some of them are the empty strinf---wherever there were two consecutive newlines in the oringal input to separate the pack of one elf from the pack of the next elf.)

We need to convert them to numbers.  To that end, we apply the higher-order array-method `map()` to the `caloriesAsStrings`:

```js
const calories = caloriesAsStrings.map(str => parseInt(str));
```

It is important to note that `parseInt()` converts the empty string to the value `NaN`:  "not a number".

## Looping to Compute Pack-Totals

The array `calories` consists of calorie counts, with `NaNs` separatng items in different packs.  We'll work with this array to find the sums of the calorie-counts in each pack.

First, we make an array to hold the total calories for each pack:

```js
const packTotals = [];
```


One by one, we pull items from the beginning of the calories array, making the pack totals:

```js
while (calories.length > 0) {
  let packTotal = 0;
  let currentItem = calories.shift();
  while (!isNaN(currentItem)) {
    packTotal += currentItem;
    currentItem = calories.shift();
  }
  packTotals.push(packTotal);
};
```

`packTotals` is now an array of the total calories in each pack.

## Reporting the Maximum Pack-Total

Finally, we compute the maximum of the pack totals:

```js
let maxPackTotal = Math.max(...packTotals);
```

(Math.max() takes as arguments all of the numbers of which we wish to find the maximum.  Note the use of the three-dot notation notation `...` to convert the single array into separate arguments. For a review of the three-dot notation, see the section [Rest Parameters](https://eloquentjavascript.net/04_data.html#h_hX9DkIBp9y) in *Eloquent JavaScript*. )

Finally, we report the maximum to the console:

```js
console.log(maxPackTotal);
```

We are done!

## Full Code

A complete solution to the problem may be found [here](/js/advent-2022-01.js), or the reader may view it below:

```js
const fs = require("fs");
const path = require("path");

let targetFile = path.resolve(__dirname, "input.txt");

const input = fs.readFileSync(targetFile).toString();

const splitLines = str => str.split(/\n/);
const caloriesAsStrings = splitLines(input);

const calories = caloriesAsStrings.map(str => parseInt(str));

const packTotals = [];

while (calories.length > 0) {
  let packTotal = 0;
  let currentItem = calories.shift();
  while (!isNaN(currentItem)) {
    packTotal += currentItem;
    currentItem = calories.shift();
  }
  packTotals.push(packTotal);
}

let maxPackTotal = Math.max(...packTotals);
console.log(maxPackTotal);
```