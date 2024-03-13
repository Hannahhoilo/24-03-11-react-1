import Product from "./Product";

function ProductList () {

	const product1 = {
		name: "Apple",
		price: 10,
		category: "fruit",
	  };
	  const product2 = {
		name: "Chicken burger",
		price: 45,
		category: "meat",
	  };
	  const product3 = {
		name: "Spagetthi",
		price: 35,
		category: "dry goods",
	  };

	return (
		<>
		<Product item={product1}/>
		<Product item={product2}/>
		<Product item={product3}/>
		</>
	)
}

export default ProductList