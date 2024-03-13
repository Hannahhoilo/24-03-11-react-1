function Product ({item}) {

	console.log(item);
	return (
		<>
		<div>
		 	{item.name}{item.price}{item.category}
		 </div>
		</>
		
	)
}


export default Product