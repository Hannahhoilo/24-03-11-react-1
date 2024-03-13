function DisplayRandomNum () {

	const randomNum = Math.random();
	const randomBoolean = randomNum > 0.5;

	console.log(randomBoolean);
	
	return (
		<>
			
			<a href={(randomBoolean) 
			? 'https://www.kristiania.no/studier/fagskole/frontend-utvikling/'
			: 'https://www.kristiania.no/studier/fagskole/grafisk-design/'
			}
			target='_blank'
			>Please click me!</a>

		</>
	)
}

export default DisplayRandomNum