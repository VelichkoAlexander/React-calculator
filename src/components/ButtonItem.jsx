var React = require('react');

var ButtonItem = React.createClass({
  clear: function(){
      this.setState({value: ""});
    },
  render: function(){
    var styleButton = this.props.nameButton == "Clear" ? "btn btn-raised btn-danger btn-block": "btn btn-raised btn-primary btn-block";
    return (

      <button className={styleButton} onClick={this.props.onClick}>{this.props.nameButton}</button>

    );
  }

});



module.exports =  ButtonItem;
