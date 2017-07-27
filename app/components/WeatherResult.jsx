var React = require('react');


// var WeatherResult = React.createClass({
//   render: function (){
//     var {temp, location} = this.props;
//
//     return (
//       <p>It's {temp} in {location}, motherfucker</p>
//     )
//   }
// });


var WeatherResult = (props) => {
  var {temp, location} = props;

  return (
    <p>It's {temp} in {location}, motherfucker</p>
  )
}

module.exports = WeatherResult;
