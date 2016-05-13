var React = require('react');

var ButtonItem = React.createClass({

  render: function(){
    var styleButton = this.props.nameButton == "Clear" ? "btn btn-raised btn-danger btn-block": "btn btn-raised btn-primary btn-block";
    return (

      <button className={styleButton}>{this.props.nameButton}</button>

    );
  }

});



module.exports =  ButtonItem;
