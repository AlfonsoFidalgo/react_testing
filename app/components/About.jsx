var React = require('react');


// var About = React.createClass({
//   render: function (){
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Small weather application using React.</p>
    </div>
  )
};

module.exports = About;
