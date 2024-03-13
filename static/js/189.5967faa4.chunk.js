(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[189],{758:function(e,n,t){"use strict";t.r(n),n.default=' ## What are props?\n\n- Props is the shorthand for Properties in React.\n- They are read only components which must be kept pure i.e. immutable.\n- They are always passed down from the parent to the child components throughout the application.\n- A child component can never send a prop back to the parent component.\n- This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.\n\n**How do you pass data with props?**\n\nHere is an example of how data can be passed by using props:\n\n```jsx\nconst Person = (props) => {\n  return (\n    <h3>\n      Name: {props.name} | Company: {props.company}\n    </h3>\n  );\n};\n\nconst App = () => {\n  return (\n    <div>\n      <Person name="Praveen" company="CTS" />\n      <Person name="Kiran" company="HCL" />\n      <Person name="Vipin" company="Wipro" />\n    </div>\n  );\n};\n```\n\nFirstly, we need to define some data for Person Component in App Component and access with **prop** attributes in Person Component.\n\n```jsx\n<Person name="Praveen" company="CTS" />\n```\n\n**name and company** is a defined props here and contains text data. Then we can pass data with props like we\'re giving an argument to a function:\n\n```jsx\nconst Person = (props) => {\n  // statements\n};\n```\n\nAnd finally, we use dot notation to access the prop data and render it:\n\n```jsx\nreturn (\n  <h3>\n    Name: {props.name} | Company: {props.company}\n  </h3>\n);\n```\n\nYou can also check the [demo](https://praveenoruganti.github.io/courses/demo/reactjs/prop.html).\n\nIn Class Component, we need to use **this.props** instead of **props** as props is reserved keyword refers to the class.\n\nLets convert the above example from Functional component to Class Component,\n\n```jsx\nclass Person extends React.Component {\n  render() {\n    return (\n      <h3>\n        Name: {this.props.name} | Company: {this.props.company}\n      </h3>\n    );\n  }\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n        <Person name="Praveen" company="CTS" />\n        <Person name="Kiran" company="HCL" />\n        <Person name="Vipin" company="Wipro" />\n      </div>\n    );\n  }\n}\n```\n\n## What is state?\n\nReact has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.\nThey are mutable unlike the props and create dynamic and interactive components.\n\nHere is an example showing how to use state:\n\n```jsx\nclass StateTest extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      id: 1,\n      name: "Praveen Oruganti",\n      designation: "Software Engineer",\n    };\n  }\n  render() {\n    return (\n      <div>\n        Id: {this.state.id} <br />\n        Name: {this.state.name} <br />\n        Designation: {this.state.designation}\n      </div>\n    );\n  }\n}\n```\n\nYou can also check the [demo](https://praveenoruganti.github.io/courses/demo/reactjs/state.html).\n\n\n**How do you update a component\'s state?**\n\nState should not be modified directly, but it can be modified with a special method called setState( ).\n\n```jsx\nthis.state.id = 2; // wrong\nthis.setState({\n  // correct\n  id: 2,\n});\n```\n\n**What happens when state changes?**\n\nOK, why must we use setState()? Why do we even need the state object itself? If you are asking these questions, don\'t worry \u2013 you\'ll understand state soon :) Let me answer.\n\nA change in the state happens based on user-input, triggering an event, and so on. Also, React components (with state) are rendered based on the data in the state. State holds the initial information.\n\nSo when state changes, React gets informed and immediately re-renders the DOM \u2013 not the whole DOM, but only the component with the updated state. This is one of the reasons why React is fast.\n\nAnd how does React get notified? You guessed it: with setState(). The setState() method triggers the re-rendering process for the updated parts. React gets informed, knows which part(s) to change, and does it quickly without re-rendering the whole DOM.\n\nIn summary, there are 2 important points we need to pay attention to when using state:\n\n- State shouldn\'t be modified directly \u2013 the setState() should be used.\n- State affects the performance of your app, and therefore it shouldn\'t be used unnecessarily.\n\n**Can I use state in every component?**\n\nAnother important question you might ask about state is where exactly we can use it. In the early days, state could only be used in class components, not in functional components.\n\nThat\'s why functional components were also known as stateless components. However, after the introduction of React Hooks, state can now be used both in class and functional components.\n\nIf your project is not using React Hooks, then you can only use state in class components.\n\nLets see an example on usage of **state with events**\n\n```jsx\nclass App extends React.Component {\n  state = {\n    /*  Initial State */\n    input: "",\n    reversedText: "",\n  };\n\n  /* handleChange() function to set a new state for input */\n  handleChange = (event) => {\n    const value = event.target.value;\n    this.setState({\n      input: value,\n    });\n  };\n\n  /* handleReverse() function to reverse the input and set that as new state for reversedText */\n  handleReverse = (event) => {\n    event.preventDefault();\n    const text = this.state.input;\n    this.setState({\n      reversedText: text.split("").reverse().join(""),\n    });\n  };\n\n  render() {\n    return (\n      <React.Fragment>\n        {/* handleReverse() is called when the form is submitted */}\n        <form onSubmit={this.handleReverse}>\n          <div>\n            {/* Render input entered */}\n            <label>Text: {this.state.input}</label>\n          </div>\n          <div>\n            {/* handleChange() is triggered when text is entered */}\n            <input\n              type="text"\n              value={this.state.input}\n              onChange={this.handleChange}\n              placeholder="Enter a text"\n            />\n          </div>\n          <div>\n            <button>Reverse Text</button>\n          </div>\n        </form>\n        {/* Render reversed text */}\n        <p>Reversed Text: {this.state.reversedText}</p>\n      </React.Fragment>\n    );\n  }\n}\n```\n\nYou can also check the [demo](https://praveenoruganti.github.io/courses/demo/reactjs/state_event.html).\n\n## What are the differences between props and state?\n\n- Components receive data from outside with props, whereas they can create and manage their own data with state.\n- Props are used to pass data, whereas state is for managing data.\n- Data from props is read-only, and cannot be modified by a component that is receiving it from outside.\n- State data can be modified by its own component, but is private (cannot be accessed from outside).\n- Props can only be passed from parent component to child (unidirectional flow).\n- Modifying state should happen with the setState() method.\n '}}]);