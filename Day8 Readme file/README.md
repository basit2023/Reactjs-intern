

# useContext Hook in React

The `useContext` hook is a powerful tool in React for managing state or data that needs to be accessed by multiple components in the component tree without prop drilling. It allows you to access the values stored in a context directly.

## Why Use `useContext`?

1. **Avoid Prop Drilling**: When you need to pass data through multiple levels of components, prop drilling can make your codebase harder to manage. The `useContext` hook solves this problem by providing a direct way to access context values.
   
2. **Simplify State Management**: It works well for scenarios where you have shared state or functionality, like theme toggling, authentication status, or language settings.

3. **Improved Code Readability**: With `useContext`, components can focus on their functionality rather than managing data flow.

---

## Example: Authentication Context

### Step 1: Create the Context
Create a file `AuthContext.js` for defining the context and provider.

```javascript
import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Example login function
  const login = (userData) => setUser(userData);

  // Example logout function
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

### Step 2: Use the Context in Components
Here’s how you can consume the context in a child component.

#### Navbar Component
```javascript
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h1>My Application</h1>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </nav>
  );
};

export default Navbar;
```

#### App Component
Wrap your application in the `AuthProvider` to provide the context to all child components.

```javascript
import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
};

export default App;
```

---

### Step 3: Test the Example
To test, add a login button somewhere in your app to trigger the `login` function:

```javascript
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const LoginButton = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login({ name: 'Tooba Shafiq', email: 'tooba@example.com' });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
```

Include `LoginButton` in the app:

```javascript
const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <LoginButton />
    </AuthProvider>
  );
};
```

---

## Why Am I Using This Approach?

1. **Centralized Data Management**: The `AuthContext` consolidates user-related data in one place.
2. **Flexibility**: Any component can access or update the authentication state without passing props.
3. **Reusability**: The context can be extended to manage more functionalities, like user roles or permissions, without changing the component tree structure.

---

### Benefits of `useContext`
- Makes your application scalable.
- Reduces coupling between components.
- Provides a clear structure for managing shared state.


## **Further Reading**
- [freecodecamp: useContext](https://www.freecodecamp.org/news/react-context-for-beginners/)
- [Thelinuxcode: useContext](https://thelinuxcode.com/react-context-for-beginners-the-complete-guide-2023/)


