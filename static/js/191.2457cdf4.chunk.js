(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[191],{760:function(e,t,n){"use strict";n.r(t),t.default=" Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.\n\n```jsx\nimport React, { useState } from \"react\";\n\nexport default function SampleCountHook() {\n  // Declare a new state variable, which we'll call as count\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}\n```\n\nThis example renders a counter. When you click the button, it increments the value.\n\nHere, useState is a Hook (we'll talk about what this means in a moment). We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It's similar to this.setState in a class, except it doesn't merge the old and new state together. (We\u2019ll show an example comparing useState to this.state in Using the State Hook.)\n\nThe only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn\u2019t have to be an object \u2014 although it can be if you want. The initial state argument is only used during the first render.\n\n**Declaring multiple state variables**\n\nYou can use the State Hook more than once in a single component:\n\n```jsx\nfunction ExampleWithManyStates() {\n  // Declare multiple state variables!\n  const [age, setAge] = useState(42);\n  const [fruit, setFruit] = useState(\"banana\");\n  const [todos, setTodos] = useState([{ text: \"Learn Hooks\" }]);\n  // ...\n}\n```\n\n## What is a Hook?\n\nHooks are functions that let you **hook into** React state and lifecycle features from function components. Hooks don't work inside classes \u2014 they let you use React without classes. (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)\n\nHooks are JavaScript functions, but they have two additional rules:\n\n- Only call Hooks at the top level. Don\u2019t try to call Hooks inside loops, conditions, or nested functions.\n- Only call Hooks from React function components. Don\u2019t try to call Hooks from regular JavaScript functions.\n\nReact provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. We'll look at the built-in Hooks first.\n\nHere with the different types of React Hooks.\n\n- useState\n- useEffect\n- useContext\n- useRef\n- useReducer\n- useMemo and useCallback\n- Custom Hook\n\n## React Component Lifecycle methods in Hooks\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/lifecycle.jpg)\n\n## Is Hooks cover all use cases for classes?\n\nHooks doesn't cover all use cases of classes but there is a plan to add them soon. Currently there are no Hook equivalents to the uncommon **getSnapshotBeforeUpdate** and **componentDidCatch** lifecycles yet.\n "}}]);