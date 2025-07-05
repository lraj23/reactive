import Opening from "@/components/Opening";

export default function List({ data }) {
	var listItems = [];
	for (let i = 0; i < Object.keys(data).length; i++) {
		let opening = data[Object.keys(data)[i]];
		listItems[i] = (
			<Opening info={opening} key={i} />
		);
	}
	return (
		<div id="list">{listItems}</div>
	);
}