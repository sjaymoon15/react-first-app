import React from 'react';

class App extends React.Component {
	render(){
		let txt = this.props.txt;
		let cat = this.props.cat;
		return <h1>{txt}{cat}</h1>;
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

export default App