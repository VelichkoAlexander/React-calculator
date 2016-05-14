var React = require('react');

var InputItem = React.createClass({

  getInitialState: function(){
    return {valid:true, value:''}
  },
  onChange: function(e){
    var val = e.target.value;
          if(!isNumber(val)){
            this.setState({valid: false, value: ''});
          }else{
              this.setState({valid: true, value: val});
          }
  },
  render: function(){
    var formClass = this.state.valid ? "form-group": "form-group has-error";
    var readMode = this.props.placeholder == "Result" ?  true : false;

    return (
      <div className={formClass}>
        <input className="form-control text-center" type="number" placeholder={this.props.placeholder} onChange={this.onChange} value={this.state.value}   readOnly={readMode}/>
      </div>
    );
  }

});

function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

module.exports =  InputItem;
