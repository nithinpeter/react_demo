var React = require("react");
var ReactDOM = require("react-dom");


var App = React.createClass({
	getInitialState: function() {
		return {
			progress1: 0,
			progress2: 0,
			progress3: 0,
			barSelected: "progress1"
		}
	},
	handleMinus: function(val) {
		var s = {};
		if(this.state[this.state.barSelected] - val < 0)
			s[this.state.barSelected] = 0
		else 
			s[this.state.barSelected] = this.state[this.state.barSelected] - val
		
		this.setState(s);
	},
	handlePlus: function(val) {
		var s = {};
		s[this.state.barSelected] = this.state[this.state.barSelected] + val
		this.setState(s);
	},
	handleOptionChange: function(event) {
		this.setState({barSelected: event.target.value});
	},
 	render: function() {
		return (<div>
			<h3> Progress Bars </h3>
			<div className="progress-bar"> 
				<ProgressBar progress={this.state.progress1}/>
				<ProgressBar progress={this.state.progress2}/>
				<ProgressBar progress={this.state.progress3}/>
			</div>
			<div>
				<select value={this.state.barSelected} onChange={this.handleOptionChange}>
					<option value="progress1">#progress1</option>
					<option value="progress2">#progress2</option>
					<option value="progress3">#progress3</option>
				</select>
				<button onClick={this.handleMinus.bind(this, 25)}> -25% </button>
				<button onClick={this.handleMinus.bind(this, 10)}> -10% </button>
				<button onClick={this.handlePlus.bind(this, 10)}> +10% </button>
				<button onClick={this.handlePlus.bind(this, 25)}> +25% </button>
			</div>
		</div>)
	}
}) 

var ProgressBar = React.createClass({
	render: function() {
		var barStyle;
		if(this.props.progress > 100)
			barStyle = { width: "100%", height: "30px", backgroundColor: "red"}
		else 
			barStyle = { width: this.props.progress + "%", height: "30px", backgroundColor: "green"}
			
		return (<div className="bar-style">
			<div style={barStyle}>
				<div>{this.props.progress + "%"}</div>
			</div>
		</div>)
	}
})   

ReactDOM.render(<App/>, document.getElementById("app"));

