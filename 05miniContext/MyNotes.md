## Context API

- This is my notes here i will be noting down the my understanding about the context.

- To avoid/solve prop drilling issue we need a state management library like Context API, Redux or Redux ToolKit (RTK).

- Today we are here to learn about Context API in React. It's a part of react library.

- Step 1: Create context

```javascript
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

> Note: Every Context will have Provider, it bascially to provide the state variable to accessible globally.

- Step 2: Create a Provider

```javascript
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```
> Note: in the above component `value` is holder the state variables that will be accesible under `children`

- Step 3: 
```javascript 
import UserContextProvider from './Context/UserContextProvider';

function App() {
    return (
        <UserContextProvider>
            <Home />
            <Contact />
        </UserContextProvider>
    )
}
 
export default App;
```
> Note: In the above code, any components under `UserContextProvider` will act as `children` (i.e as we define in the component defination). And any state variables which are holded by values attribute will be accessible by those children components. 