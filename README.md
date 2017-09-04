# fs-demo

## Node services
1. One endpoint takes in a number
2. Another endpoint returns the current total when summing the numbers together.
3. An endpoint that returns a list of the first 30 Fibonacci numbers

The first two endpoints should communicate with a separate daemon process which keeps a tally of the current integer total.

## Angular app
Angular application that has one input & 2 displays

1. A combo dropdown/input field that is populated by the Fibonacci endpoint above where typing a number provides type-ahead functionality from the list
2. A read-only field that shows a history of the numbers you entered
3. Another read-only field displays the running total.
