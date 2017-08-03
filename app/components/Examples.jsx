var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function (){
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>A few example locations</p>
      <ol>
        <li>
          <Link to='/?location=Madrid'>Madrid</Link>
        </li>
        <li>
          <Link to='/?location=London'>London</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
