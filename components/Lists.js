import Opening from "@/components/Opening";

export default function List({ data }) {
	var listItems = [(
		<div className="listItem" key={0}>
			<a href={"/ECO-" + data[Object.keys(data)[0]].eco[0] + "XX/" + data[Object.keys(data)[0]].eco} className="openingName">{data[Object.keys(data)[0]].name} ({data[Object.keys(data)[0]].eco})</a>
			<p className="openingMoves">{data[Object.keys(data)[0]].moves}</p>
		</div >
	)];
	for (let i = 1; i < Object.keys(data).length; i++) {
		let opening = data[Object.keys(data)[i]];
		listItems[i] = (
			<Opening info={opening} key={i} />
		);
	}
	return (
		<div id="list">{listItems}</div>
	);
}