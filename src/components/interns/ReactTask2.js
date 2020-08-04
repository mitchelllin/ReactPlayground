/**
 * @author Shayan A.
 */
import React from 'react';
import {Jumbotron} from "react-bootstrap";
import {Alert} from "react-bootstrap"

const ReactTask2 = () => {
  return (
    <Jumbotron>
      <h1 className="display-4">Hello, Interns</h1>
      <p className="lead">
        Welcome to the React Task 2.
      </p>
      <hr className="my-4"/>
      <h2>Your Task</h2>

      <p>
        For this assignment App.js serves as our main page. Any additional components/page need to be registered at
        App.js. Look at how we structured App.js.
      </p>
      <ul>
        <li>Create a Component in components/interns and name it internNamePage`.</li>
        <li>Customize your component/page however you want (add personal information etc). <Alert variant="warning">At a minimum, resuse the InternInfoDisplay component. When reusing the component, try to overload the button's onclick behavior. </Alert>
        
         </li>
        <li>If you want to add custom styling, you can add it in styles/app.css.</li>
        <li>Register the path /interns/internName with your component in Route.</li>
        <li>Add a Link to your component/page in the Navigation.js under the NavDropdown.</li>
      </ul>
      <p className="lead">
        <a className="btn btn-primary" href="https://reactrouter.com/web/api/Hooks" role="button">
          Learn more about React Router
        </a>
      </p>
    </Jumbotron>
  );
};

export default ReactTask2;