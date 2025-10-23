# Context API in React

## The React Context API is a powerful feature used to manage global or shared state across components without passing props manually through each level of the component tree (a problem known as prop drilling).​

# Purpose

## The Context API’s main purpose is to:

### Provide a global data store accessible to any component in the component hierarchy.

### Simplify data sharing across deeply nested components.

### Reduce the need for external state management libraries like Redux for simpler cases.​

# How It Works

1. Create a Context:
   You start by creating a context using React.createContext().

## const ThemeContext = React.createContext();

            This function returns a Provider and a Consumer component (or can be accessed via the useContext hook).​

Provider:
The Provider wraps the part of your app that needs access to shared data.
It accepts a value prop that stores the shared data or state.

<ThemeContext.Provider value={{ theme, setTheme }}>
<App />
</ThemeContext.Provider>
Any update to the value triggers re-renders of all components consuming that context.​

# Consumer / useContext():

Components can consume the context using the useContext() hook.

# const { theme, setTheme } = useContext(ThemeContext);

# Common Use Cases

The Context API is commonly used for:

-> User authentication (sharing login state and user info).
-> Application theme (light/dark mode toggling).
-> Language selection or localization.
-> Sharing configuration data like API endpoints or Firebase instances.​

When to Use
Use the Context API when:

Multiple nested components need access to the same data.

Global state changes infrequently.

Avoid using it for rapidly updating data (like form inputs) because it can trigger excessive re-renders; for such cases, tools like Zustand or Redux perform better.​

In summary, the Context API helps centralize and simplify state sharing in React apps, acting as a built-in, lightweight global state solution without external dependencies.
