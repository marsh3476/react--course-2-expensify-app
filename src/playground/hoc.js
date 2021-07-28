

// higher order component (HOC) - 
// component that renders another component

import { props } from 'bluebird';
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share"</p> }
      <WrappedComponent {...props} />
    </div>
  );
};




const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not authenticated</p> }
      
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the info" />, 
//   document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="You have been authenticated!!" />, 
  document.getElementById('app'));