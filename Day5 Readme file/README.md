# React Props Documentation

## Introduction
Props (short for "properties") are used in React to pass data from parent components to child components. Props make components reusable and dynamic by allowing you to customize the content, appearance, and behavior of child components.

---

## Table of Contents
- [What are Props?](#what-are-props)
- [How to Pass Props](#how-to-pass-props)
- [Accessing Props in a Component](#accessing-props-in-a-component)
- [Default Props](#default-props)
- [Prop Types Validation](#prop-types-validation)
- [Examples](#examples)
  - [Functional Component](#functional-component)
- [Best Practices](#best-practices)

---

## What are Props?
Props are read-only data that are passed from a parent component to a child component. They allow child components to be dynamic and customizable. Props can be any JavaScript data type: strings, numbers, objects, arrays, functions, and more.

---

## How to Pass Props
To pass props to a component, you add attributes to the component tag.

```jsx
<ChildComponent name="John Doe" age={25} isAdmin={true} />
```

Here, `name`, `age`, and `isAdmin` are props being passed to `ChildComponent`.

---

## Accessing Props in a Component
### Functional Components
Props are accessed as arguments in functional components.

```jsx
function ChildComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
      <p>Admin Status: {props.isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
}
```

### Destructuring Props
You can also destructure props for cleaner syntax.

```jsx
function ChildComponent({ name, age, isAdmin }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>Admin Status: {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
}
```

---

## Default Props
You can define default props in case a parent component does not pass them.

### Functional Component Default Props
```jsx
function ChildComponent({ name = 'Guest', age = 18, isAdmin = false }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>Admin Status: {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
}
```

---

## Prop Types Validation
To ensure props are the correct type, you can use the `prop-types` library.

```bash
npm install prop-types
```

### Example of Prop Types
```jsx
import PropTypes from 'prop-types';

function ChildComponent({ name, age, isAdmin }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>Admin Status: {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
}

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool,
};

ChildComponent.defaultProps = {
  name: 'Guest',
  age: 18,
  isAdmin: false,
};
```

---

## Examples
### Functional Component
```jsx
function Button({ label, onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
```

### Usage
```jsx
<Button label="Click Me" onClick={() => alert('Button Clicked!')} disabled={false} />
```

### Passing Data Between Components
To pass data between components, you use props to transfer data from a parent component to a child component.

#### Example of Parent to Child Data Passing
```jsx
function ParentComponent() {
  const user = { name: 'John Doe', age: 25 };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={user.name} age={user.age} />
    </div>
  );
}

function ChildComponent({ name, age }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

#### Example of Child to Parent Communication
To send data from a child to a parent, you pass a function from the parent as a prop and call it in the child component.

```jsx
function ParentComponent() {
  const handleData = (data) => {
    console.log('Data received from child:', data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent sendData={handleData} />
    </div>
  );
}

function ChildComponent({ sendData }) {
  const sendDataToParent = () => {
    sendData('Hello from Child Component');
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}
```

---

## Best Practices
1. **Destructure Props**: Destructure props for cleaner and more readable code.
2. **Prop Types Validation**: Use `PropTypes` to validate the data type of props and avoid runtime errors.
3. **Use Default Props**: Always provide default props to prevent `undefined` values.
4. **Keep Components Pure**: Avoid modifying props inside a component. Props are read-only.
5. **Use Short-Circuit Evaluation**: Use logical operators to conditionally render parts of a component.

Example:
```jsx
{isAdmin && <p>You have admin access</p>}
```

6. **Avoid Passing Excessive Props**: Pass only the props required by the child component.

7. **Document Required Props**: Clearly document which props are required and what type of data they expect.

---

## Conclusion
Props are a fundamental concept in React that enable components to be dynamic and reusable. By using props effectively, you can create versatile, maintainable, and scalable applications. Follow best practices such as using prop validation, default props, and clean component design to ensure better code quality.

If you have any questions or suggestions for improving this document, feel free to reach out or submit a pull request.



## **Further Reading**
- [Dev: Props](https://dev.to/kenbaz/sharing-data-between-components-in-react-9hn)


