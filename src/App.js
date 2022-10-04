import { useState, useEffect } from 'react';
import './App.css';


const HeaderInfo = () => {
	return (
		<div>
			<h1>My Counter</h1>
			<p>Wanted to make this without looking at the source code I learned it from.</p>
			<hr/>
			<br/>
		</div>
	)
}

const FullName = (names) => {
	return (
		<div>
			<br/>
			<hr/>
			<p>Made By:</p>
			<h3 className='my-name'>{names.firstName + " " + names.lastName}</h3>
		</div>
	)
}

const App = () => {
	const firstName = "Brennan"
	const lastName = "Stopnik"

	const [count, setCount] = useState(0)
	// const [color, setColor] = useEffect()

	const decrementCount = () => {
		setCount(prevCount => prevCount - 1)
	}

	const incrementCount = () => {
		setCount(prevCount => prevCount + 1)
	}

	// const changeColor = () => {
	// 	setColor()
	// }

  	return (
    	<div className="App">
			<HeaderInfo />
			<button className='button' onClick={decrementCount}>-</button>
			<span className='count'>{count}</span>
			<button className='button' onClick={incrementCount}>+</button>
			<FullName 
				firstName={firstName}
				lastName={lastName}
			/>
    	</div>
  	);
}

export default App;
