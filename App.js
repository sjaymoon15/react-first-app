import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state= {
			txt:'state default',
			cat: 0,
			red: 0,
			green: 0,
			blue: 0
		}
	}
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value,
		})
	}
	render(){
		
		return (
			<div>
				<Slider ref='red' update={this.update.bind(this)} />{this.state.red}<hr />
				<Slider ref='green' update={this.update.bind(this)} />{this.state.green}<hr />
				<Slider ref='blue' update={this.update.bind(this)} />{this.state.blue}<hr />				
			</div>
		);
	}
}
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default props',
	cat: 10
}
class Slider extends React.Component {
	render(){
		return (
			<input type='text' onChange={this.props.update} />
			)
	}
}
// const Widget = (props) => {
// 	return (
// 		<div>
// 			<h2>{props.txt}</h2>
// 			<input type='text' onChange={props.update} />
// 		</div>
// 		)
// }
export default App