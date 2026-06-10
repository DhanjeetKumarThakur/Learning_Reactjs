# currencyConvertor Project 

## useId Hook 
> `useId()` is a React Hook that generates a unique, stable ID for a component instance. It's commonly used to connect form elements such as labels and inputs for accessibility.

Syntax: 
```javascript
import { useId } from "react";

function MyComponent() {
  const id = useId();

  return <input id={id} />;
}
```

## Why use `useId`? 
`useId()` solves this by generating unique IDs automatically.

## Server-Side Rendering (SSR)

#### A major advantage of `useId` is that it works correctly with server-side rendering. 

Without `useId`, generating IDs with:
```javascript
Math.random()
```
