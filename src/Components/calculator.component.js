import React from 'react';

class Calculator extends React.Component{
		constructor(){
		    super();
		    this.state = {A: "...", B: "..."};
		}

	 	setA(e){
		    const A = e.target.value;
		    this.setState({A: A});
		}

		setB(e){
		    const B = e.target.value;
		    this.setState({B: B});
		}


	render(){
		return (
			<div>
				
        		<h1>Input1 : {this.state.A}</h1>
        		<h1>Input2 : {this.state.B}</h1>
        		<h1>Total : {this.state.A + this.state.B}</h1>

        		<input onChange= {this.setA.bind(this)} />
        		<input onChange= {this.setB.bind(this)} />

			</div>
		);
	}
}

export default Calculator;