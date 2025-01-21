# React: Unexpected State Updates Due to Asynchronous Nature

This repository demonstrates a common issue in React applications involving unexpected state updates due to the asynchronous nature of state updates.  The `bug.js` file showcases a scenario where multiple state updates within a single event handler lead to only the last update being reflected.  This can cause unexpected behavior or, in some cases, infinite render loops.

The `bugSolution.js` file provides a corrected version using `useReducer` or functional updates to ensure that state updates are handled correctly. 

## Problem

In React, state updates are batched and asynchronous.  This means that multiple state update calls within a single event handler might not be applied sequentially. This can lead to surprising results.

## Solution

To fix this issue, we can employ either of the following approaches:

1. **Use functional updates:**  Instead of directly updating the state with `setCount(count + 1)`, use a functional update: `setCount(prevCount => prevCount + 1)`
2. **Use `useReducer`:** For more complex state logic, `useReducer` offers a cleaner and more predictable way to manage state updates.
