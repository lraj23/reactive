import Intro from "@/components/Intro";

export default async function ECO({ letter }) {
	var category = {}, listItems = [];

	await fetch("https://raw.githubusercontent.com/hayatbiralem/eco.json/refs/heads/master/eco" + letter + ".json").then((res) => res.json()).then((data) => category = data);
	for (let i = 0; i < Object.keys(category).length; i++) {
		let opening = category[Object.keys(category)[i]];
		listItems[i] = (
			<a href={"/" + opening.eco[0] + "/" + encodeURIComponent(opening.moves)} className="listItem" key={i}>
				<p className="openingName">{opening.name} ({opening.eco})</p>
				<p className="openingMoves">{opening.moves}</p>
			</a>
		);
	}

	return (
		<div id="mainDiv">
			<Intro desc={"Access information about every opening with an ECO code like " + letter + "XX."}>ECO codes starting with {letter}</Intro>
			<br />
			<a href="/" className="navFromCategory">Return Home</a>
			<div id="list">{listItems}</div>
			<a href="#top" id="toTop">Scroll to top</a>
		</div>
	);
}