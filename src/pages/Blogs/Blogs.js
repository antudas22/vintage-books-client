import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="mb-16">
        <div className='text-center mb-10'>
            <h3 className='text-3xl font-semibold mt-5'>Blog</h3>
            </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">1. What are the different ways to manage a state in a React application?</h3>
          <p>Ans: There are Four Kinds of React State to Manage.<br/>
            1.  Local state.<br/>
            2. Global state.<br/>
            3.  Server state.<br/>
            4. URL state.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">2. How does prototypical inheritance work?</h3>
          <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">3. What is a unit test? Why should we write unit tests?</h3>
          <p>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">4. React vs. Angular vs. Vue?</h3>
          <p>Ans: There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.<br/><br/>

React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.<br/><br/>

They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.<br/><br/>

Each framework is component-based and allows the rapid creation of UI features.<br/><br/>

However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blogs;