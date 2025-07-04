import Link from "@/components/Links";

export default function Home() {
	return (
		< div id="mainDiv" >
			<div id="intro">
				<p className="powerful">Chess ECO: Your Openings Catalogue</p>
				Learn openings with this comprehensive list!
			</div>
			<div id="links">
				<Link href="ECO-AXX" index="1" total="5" >Openings with ECO starting with A</Link>
				<Link href="ECO-BXX" index="2" total="5" >Openings with ECO starting with B</Link>
				<Link href="ECO-CXX" index="3" total="5" >Openings with ECO starting with C</Link>
				<Link href="ECO-DXX" index="4" total="5" >Openings with ECO starting with D</Link>
				<Link href="ECO-EXX" index="5" total="5" >Openings with ECO starting with E</Link>
			</div>
		</div >
	);
}

// TESTS OF MyComponent, MyList, AND MyTitle
// import MyComponent from "@/components/MyComponent";
// import MyList from "@/components/MyList";
// import MyTitle from "@/components/MyTitle";
// const food = [
// 	{ title: "Cabbage", id: 1 },
// 	{ title: "Garlic", id: 2 },
// 	{ title: "Apple", id: 3 }
// ];
// const electronics = [
// 	{ title: "Laptop", id: 1 },
// 	{ title: "Headphones", id: 2 },
// 	{ title: "Mechanical keyboard", id: 3 }
// ];

// NESTED COMPONENTS WITH A PRODUCTS LIST
// import Child from "@/components/Child";
// const products = {
// 	"Grocery": [
// 		{ "name": "Apple", "id": 1201, "price": 0.99 },
// 		{ "name": "Banana", "id": 1202, "price": 0.79 },
// 		{ "name": "Capsicum", "id": 1203, "price": 1.39 },
// 	],
// 	"Tech": [
// 		{ "name": "Dell ADVANCED LAPTOP", "id": 1204, "price": 699.99 },
// 		{ "name": "Extra Special Watch", "id": 1205, "price": 499.99 },
// 		{ "name": "Flash Drive - 16TB", "id": 1206, "price": 149.99 }
// 	],
// 	"Clothes": [
// 		{ "name": "Gloves", "id": 1207, "price": 13.99 },
// 		{ "name": "Hat", "id": 1208, "price": 24.99 },
// 		{ "name": "iPhone 26 Pro Max", "id": 1209, "price": 1299.99, "isMisplaced": true }
// 	],
// 	"School Supplies": [
// 		{ "name": "JetBrains Pencil (not a scam)", "id": 1210, "price": 29.99 },
// 		{ "name": "Krayola EXTRA-CHEAP Crayons - 96 pack (not a scam)", "id": 1211, "price": 0.99 },
// 		{ "name": "Lavith's SECRET item", "id": 1212, "price": -999.99 }
// 	]
// };