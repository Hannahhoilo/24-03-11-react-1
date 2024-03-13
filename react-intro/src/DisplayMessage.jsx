function DisplayMessage({user}){
	
	return(
		<>
	  <h1>Hello my friend 💖</h1>

	  <h2>{user.name} {user.age} {user.email}</h2>
	  </>
	)
  }

  export default DisplayMessage