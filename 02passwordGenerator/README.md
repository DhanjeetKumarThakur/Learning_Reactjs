# passwordGenerator Project

## useCallback Hook 
> `useCallback()` is a React Hook that memoizes a function so that React returns the same function instance between renders unless its dependencies change.

#### Syntax :
```javascript
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);
```
- The first argument is the function you want to memoize.
- The second argument is the dependency array.
- React recreates the function only when one of the dependencies changes.

## `useCallback` vs `useMemo`
| Hook                         | Purpose                   |
| ---------------------------- | ------------------------- |
| `useCallback(fn, deps)`      | Memoizes a function       |
| `useMemo(() => value, deps)` | Memoizes a computed value |

Example: 
```javascript 
const memoizedFunction = useCallback(() => {
  return count * 2;
}, [count]);

const memoizedValue = useMemo(() => {
  return count * 2;
}, [count]);
```
