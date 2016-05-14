var React = require('react');

var ButtonItem = require('./ButtonItem.jsx');
var InputItem = require('./InputItem.jsx');



var Calculator = React.createClass({
  get: function(){
    var a =  +this.refs.firstNumber.state.value;
    var b =  +this.refs.secondNumber.state.value;
    return {a:a, b:b};
  },
  set: function(obj){
    this.refs.answer.setState(obj);
  },
  onAdd: function(){
      var a  = this.get().a;
      var b  = this.get().b;
      this.set({value: a+b}) ;
  },
  onSubtract: function(){
    var a  = this.get().a;
    var b  = this.get().b;
    this.set({value: a-b}) ;
  },
  onDivide: function(){
    var a  = this.get().a;
    var b  = this.get().b;
    if(b>0){
      this.set({value: a/b}) ;
    }else{
      alert('Division by zero is undefined');
    }
  },
  onMultiply: function(){
    var a  = this.get().a;
    var b  = this.get().b;
    this.set({value: a*b}) ;
  },
  onClear:function(){
    this.refs.firstNumber.setState({value:''});
    this.refs.secondNumber.setState({value:''});
    this.refs.answer.setState({value:''});
  },
  render: function(){
    var pnaelStyle = {marginTop:35}
    var inputStyle = {marginBottom: 20}

    return (
      <div style={pnaelStyle} className="panel panel-default">
        <div className="panel-body">
          <h2 className="text-center">Simple calculator</h2>

            <div style={inputStyle} className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <InputItem placeholder="NUMBER e.g. 2108" ref="firstNumber"/>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <InputItem placeholder="NUMBER e.g. 2108" ref="secondNumber"/>
              </div>
            </div>
            <div style={inputStyle}  className="row">
              <div className="col-sm-6 col-md-3">
                  <ButtonItem nameButton="+ Add" onClick={this.onAdd}/>
              </div>
              <div className="col-sm-6 col-md-3">
                  <ButtonItem nameButton="- Subtract" onClick={this.onSubtract} />
              </div>
              <div className="col-sm-6 col-md-3">
                  <ButtonItem nameButton="/ Divide" onClick={this.onDivide} />
              </div>
              <div className="col-sm-6 col-md-3">
                  <ButtonItem nameButton="* Multiply" onClick={this.onMultiply} />
              </div>
            </div>
            <div  className = "row">
              <div className="col-md-9">
                <InputItem placeholder="Result" ref="answer"/>
              </div>
              <div className="col-md-3">
                <ButtonItem nameButton="Clear" onClick={this.onClear}/>
              </div>

            </div>

        </div>
      </div>
    );
  }


});


module.exports = Calculator;
