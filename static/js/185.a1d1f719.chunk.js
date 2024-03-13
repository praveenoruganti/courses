(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[185],{754:function(e,n,t){"use strict";t.r(n),n.default=' React JS is a JavaScript library created by Facebook and it generally uses jsx(js and html) for writing the code and uses Virtual DOM concept.\n\nInitial release of React JS happened on May 29, 2013.\n\nReact JS is an Open Sourced JavaScript library for building fast and interactive User Interfaces. It lets you compose complex UIs from small and isolated pieces of code called **components**.\n\n## Why React JS is so popular?\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/reactjs.png)\n\nDevelopers often use React as a base for developing single-page web applications and then use other libraries to provide extra support to their web application.\n\n## Single Page Applications(SPAs)\n\nA single page application is an app that works inside a browser and does not require page load during use.\n\nSPAs are all about serving an outstanding user experience(UX) by trying to imitate a natural environment in the browser - no page reloads, no extra wait time.It is just one HTML page that you visit which then loads all other content using JavaScript.\n\nFor example: Gmail, Facebook, Instagram, Trello.\n\n## Multiple Page Applications(MPAs)\n\nMulti-page applications work in a **traditional** way. Every change like, display the data or submit the data or submit data back to server, sends a request to the server to render a new page in the browser.\n\nWhenever a user navigates from one page to another, a request is sent to the server to send a new HTML file for that URL. The server returns a file and then HTML file is loaded in the browser.\n\nFor example: Dribble, Harvard\'s Official site.\n\n## Why Startups and Enterprises love React JS (Top 10 Reasons)?\n\n**1. Virtual DOM**\n\nVirtual DOM is a modern-day marvel for businesses. It helps you create a data structure cache memory within a memory unit, which allows you to update the browser DOM more efficiently.\n\n**2. Development Speed**\n\nTime-to-market is one of the most crucial elements of any business, be it a startup or an enterprise.\n\nBusinesses are always looking for using technologies that help them to complete software development projects on-time and within the defined budget.\n\nReact JS has a plethora of reusable components which help developers to develop and maintain an application faster. Moreover, React powers React Native, which is a robust cross-platform mobile app development tool.\n\nHaving such interoperability helps businesses to build a strong mobile presence as well, along with the web.\n\n**3. Stability**\n\nThe technology used to develop web or mobile applications must remain relevant for at least a few years. With technology growing so fast, it is evident that the tools used to create applications may get obsolete in the future.\n\nHaving been backed by millions of developers and enterprises like Facebook and Instagram, the chances of it getting obsolete are negligible. React JS has been a stable technology even in the face of growing competition, such as Vue JS and Angular JS.\n\n**4. Interactive Interface**\n\nReact JS provides an opportunity to manipulate the interface flows and designing features in a fast and easy way.\n\nYou can hire React JS developers to update or develop an interface based on your tastes, desires, and principles. It can be done in two ways: loop and nest view.\n\n**5. Advance Performance**\n\nReact JS is a pro when it comes to handling graphics on a variety of devices such as a tablet, smartphone, or desktop.\n\nIt seamlessly loads any webpage on either of the devices mentioned above. React does it by automatically updating the on-page apps that do not require a reload for redrawing UI.\n\n**6. Simple to use**\n\nOne of the prominent reasons why React is one of the most loved libraries among developers is because of its simplicity. According to many developers, it is simpler than Angular JS.\n\nReact JS development simplifies the process of programming, development, and hence, administration of resources. React JS is not only a perfect framework for newbie developers but also an ideal framework for experts and experienced programmers.\n\nAlthough React JS is simple to use, it has got all the advanced level functions and capability that can help pro-developers to create stunning webpages.\n\n**7. Alternatives**\n\nBeing an open-source library, React JS acts as a stone that can kill two birds at a time.\n\nDevelopers can use React JS as the base library as well as an alternative to other libraries such as Angular, Backbone, jQuery, and more. React JS extensions comprise of all the functions available in these libraries.\n\nMoreover, these extensions are prolonged with a broad spectrum of other functions, simplifications, additions, and useful changes, which have been implemented in React.\n\n**8. Flexible Development**\n\nBusinesses took the arrival of React JS for granted. They thought that it was just another library which would give its share in simplifying web development.\n\nBut, the truth is that React does more than simplifying web development. It has helped many developers to reduce several restrictions that hindered the process of web development.\n\nReact help developers to deal with future problems and strategy to govern the web development project one of the most comfortable and flexible ways.\n\n**9. SEO-Friendly**\n\nExcluding the enterprises and startups in a monopoly business, every company requires to do SEO on their websites. They must rank higher on search engines. Using Node JS, React can render on servers easily.\n\nIt helps search engines to crawl the web application in its final form, making it simpler for webpages to index it properly.\n\nAlthough some techniques and technologies can produce similar results, they are unstable and unsuitable for mission-critical applications.\n\nReact JS has been tried and tested by several organizations in the world for creating high-quality and reliable front-end and making the site SEO-friendly.\n\n**10. Access to Developers**\n\nBeing one of the most popular frameworks among the developer community, React JS is a framework which many developers opt to learn.\n\nHence, finding a React JS developer will be easier for you. Moreover, it is simpler to train a developer with React JS, who has a basic knowledge of JavaScript and front-end development.\n\n## What are the limitations of React?\n\n- React is just a view library, not a full framework.\n- Integrating React into a traditional MVC framework requires some additional configuration.\n- The code complexity increases with inline templating and JSX.\n- Too many smaller components leading to over engineering or boilerplate.\n\n## Prerequisites for learning React JS\n\n1. Knowledge of HTML & CSS\n2. [Knowledge of JavaScript and ES6 standards](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)\n3. Some knowledge about the DOM\n4. Some knowledge about Node & npm (and installation)\n\n## React JS Roadmap\n\nLets see the React JS roadmap and go deeper into the concepts.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/roadmap.jpg)\n\n## Aspects of React JS\n\n1. Virtual DOM\n2. Data binding\n3. Server side rendering\n\n## What is meant by Virtual DOM?\n\nThe Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It\'s a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.\n\n## How Virtual DOM works?\n\nThe Virtual DOM works in three simple steps.\n\n- Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/virtualdom1.png)\n\n- Then the difference between the previous DOM representation and the new one is calculated.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/virtualdom2.png)\n\n- Once the calculations are done, the real DOM will be updated with only the things that have actually changed.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/virtualdom3.png)\n\nUpdating virtual DOM in React JS is faster because React JS uses\n\n- Efficient diff algorithm\n- Batched update operations\n- Efficient update of sub tree only\n- Uses observable instead of dirty checking to detect change\n\n## Difference between Real DOM and Virtual DOM\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/realdom_virtualdom.PNG)\n\n## What is the difference between Shadow DOM and Virtual DOM?\n\nThe Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.\n\n## What is data binding?\n\nReact JS follows unidirectional data flow or one way data binding.\nThroughout the application the data flows in a single direction which gives you better control over it.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/databinding.png)\n\n## What is Server side rendering?\n\nServer side rendering allows you to pre-render the initial state of react components at the server side only.\n\n## How is React different from Angular?\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/reactvsangular.PNG)\n\n## What is React DOM?\n\n- React DOM serves as the entry point of the DOM-related rendering paths.\n- It provides DOM-specific methods that can be used at the top level of your app.\n\nThis components should not use this module.\n\n- Render()\n- unmountComponentAtNode()\n- findDOMNode()\n\nIf you use ES5 you can write as\n\n```jsx\nvar ReactDOM = require("react-dom");\n```\n\nIf you use ES6 you can write as\n\n```jsx\nimport ReactDOM from "react-dom";\n```\n\nNow lets add React to a simple HTML and display Hello World.\n\n**Step 1**: Add a DOM Container to the HTML\n\n```JSX\n<div class="root"></div>\n```\n\n**Step 2**: Add the Script Tags\n\n```jsx\n\n  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin><\/script>\n  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin><\/script>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n```\n\n**Step 3**: Create a React Component\n\n```jsx\n// To get the root element from the HTML document\nconst rootElement = document.querySelector(".root");\nconst app = React.createElement("h1", null, "Hello World");\n\n// we render the JSX element using the ReactDOM package\nReactDOM.render(app, rootElement);\n```\n\n**That\'s It!** we have added react to a simple html and displayed Hello World. For Live Demo check this [out](https://praveenoruganti.github.io/courses/demo/reactjs/ReactDOM.html).\n\n## What is the purpose of render() in React\n\n- Each React component must have a render() mandatorily.\n- It returns a single React element which is the representation of the native DOM component\n- If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <React.Fragment> or <> or <div>\n- This function must be kept pure i.e., it must return the same result each time it is invoked.\n\n## React JS installation\n\nWe can use online editors like\n\n- https://codesandbox.io/\n- https://jsfiddle.net/reactjs/\n- https://codepen.io/\n\nNow let\'s see what are all the dependencies needed for React JS installation in your environment.\n\n- Download and install npm [https://nodejs.org/en/](https://nodejs.org/en/)\n- Download and install editor [https://code.visualstudio.com/docs/?dv=win](https://code.visualstudio.com/docs/?dv=win)\n\n## Main components to build a React JS application are\n\n- webpack.config.js -> contains information about the dependencies and the files from where browser start rendering form.\n- HTML file -> contains the html template which is used by browser to render the elements on the webpage.\n- JSX file -> contains description off what all components we want to display on our webpage and how they will behave.\n\n## Create React App\n\nFor creating application, use the below command\n\n**npx create-react-app praveenoruganti-reactjs-samples**\n\nThe create-react-app tool installs all the libraries and packages required to build a React Application. It creates a default configuration for our react project. It also add some starter files in the newly created application.\n\n**What is npm and npx?**\n\nnpm is the node package manager for JavaScript. It helps you manage all the 3rd party packages and libraries that you will be installing for your application. It installed automatically when you install Node JS.\n\nnpx is a node package runner. It is used to download and run a package temporarily.\n\nFor running the application, use the below command\n\n**npm start**\n\n**React Boilerplate**\n\nLet\'s see the React boilerplate, which has been created by create-react-app. Whenever you create a new project, you run create-react-app and name of the project.\n\nIn the following React boilerplate, there are three folders: node_modules, public and src. In addition, there are .gitignore, README.md , package.json and yarn.lock. Some of you, instead of yarn.lock, you may have package-lock.json.\n\nIt is good to know these folders and files.\n\n- node_modules - stores all the necessary node packages of the React applications.\n\n- Public\n\n  - index.html - the only HTML file we have in the entire application\n  - favicon.ico - an icon file\n  - manifest.json - is used to make the application a progressive web app\n  - other images - open graph images(open graph images are images which are visible when a link share on social media)\n  - robots.txt - information, if the website allows web scraping\n\n- src\n\n  - App.css, index.css - are different CSS files\n  - index.js - a file which allows to connect all the components with index.html\n  - App.js - A file where we usually import most of the presentational components\n  - serviceWorker.js: is used to add progressive web app features\n  - setupTests.js - to write testing cases\n\n- package.json- List of packages the applications uses\n- .gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub\n- README.md - Markdown file to write documentation\n- yarn.lock or package-lock.json - a means to lock the version of the package\n\nNow run the application using **npm start** and you will see the below in browser.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/reactjs/reactjs1.png)\n\nNow lets remove all the files, which we do not need at the moment, and leave only the files we need right now.\n '}}]);