import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state= {
			text:'this is the state text',
			cat: 0
		}
	}
	update(e){
		this.setState({text: e.target.value})
	}
	render(){
		let txt = this.props.txt;
		let cat = this.props.cat;
		let text = this.state.text;
		return (
			<div>
				<h1>{txt} {cat} {text}</h1>
				<Widget txt={text} update={this.update.bind(this)} />
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
const Widget = (props) => {
	return (
		<div>
			<input type='text' onChange={props.update} />
		</div>
		)
}
export default App