<>
  <h1> What is Redux ?</h1>
  <p>
    Redux is a JavaScript library used for managing and centralizing the state
    of an application, commonly used in complex web apps built with frameworks
    like React, Angular, or Vue.
  </p>
  <p>
    Its primary purpose is to store the entire application's state in a single,
    predictable place called the "store," making state updates traceable and
    debugging easier.
  </p>
  <p>
    Redux operates by requiring all changes to application state to be made
    through "actions," which are plain JavaScript objects describing what
    happened; these actions are handled by "reducers," which are pure functions
    that take the current state and an action as input and return the new state.
  </p>

  {/* 
    Key Concepts
    1. Single Source of Truth: The state of the entire application is stored in a single object, managed by the Redux "store," making the state easy to inspect and debug.​
        
    2. Predictable State Updates: State can only be changed by dispatching actions, which flow through reducers, making all state transitions explicit and predictable.​

    3. Ease of Testing and Debugging: Redux DevTools enable time-travel debugging, logging of state changes, and allow developers to trace when and why the state changed, which simplifies development and maintenance.​

    4. Works With Any UI Layer: While often used with React, Redux can be integrated with any JavaScript UI framework or library.​

Building Blocks
Store: The object that holds the whole state tree of the app.​

Actions: Plain objects that describe what happened and trigger state changes.

Reducers: Functions that specify how the state changes in response to actions.

Dispatch: The method used to send actions to the store.

Selectors: Functions used to select or derive data from the state.

Redux is not a complete framework; it's a focused library for state management, helping manage complex, shared application state in a predictable, debuggable manner.​
 */}
</>;
