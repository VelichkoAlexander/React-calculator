var React = require('react');

var ButtonItem = require('./ButtonItem.jsx');
var InputItem = require('./InputItem.jsx');



var Calculator = React.createClass({
  onAdd: function(){
    console.log("Initial onAdd "+this);
    var a =  +this.refs.firstNumber.state.value;
    var b =  +this.refs.secondNumber.state.value;
    console.log(a+' and '+b);
    this.refs.answer.setState({value:a+b}) ;

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
                  <ButtonItem nameButton="- Subtract" />
              </div>
              <div className="col-sm-6 col-md-3">
                  <ButtonItem nameButton="/ Divide" />
              </div>
              <div className="col-sm-6 col-md-3">
                  <ButtonItem nameButton="* Multiply" />
              </div>
            </div>
            <div  className = "row">
              <div className="col-md-9">
                <InputItem placeholder="Result" ref="answer"/>
              </div>
              <div className="col-md-3">
                <ButtonItem nameButton="Clear"/>
              </div>

            </div>

        </div>
      </div>
    );
  }


});


module.exports = Calculator;
