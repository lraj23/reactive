import Board from "@/components/Board";
import Intro from "@/components/Intro";

export default async function OpeningPage({ params }) {
	var { category, opening } = await params;
	if (!"ABCDE".split("").includes(category))
		return (
			<div id="mainDiv">
				<Intro desc="The opening may be valid, the category is wrong...">This isn't a category...</Intro>
				<a href="/" className="navFromOpening">Return Home</a>
			</div>
		);

	opening = decodeURIComponent(opening);
	var openings = {};

	await fetch("https://raw.githubusercontent.com/hayatbiralem/eco.json/refs/heads/master/eco" + category + ".json").then((res) => res.json()).then((data) => openings = data);

	var ECO_info, ECO_FEN;
	for (let i = 0; i < Object.entries(openings).length; i++) {
		if (Object.entries(openings)[i][1].moves == opening) {
			ECO_info = openings[Object.keys(openings)[i]];
			ECO_FEN = Object.keys(openings)[i];
		}
	}
	if (ECO_info === undefined || ECO_FEN === undefined)
		return (
			<div id="mainDiv">
				<Intro>This isn't an opening...</Intro>
				<a href="/" className="navFromOpening">Return Home</a>
			</div>
		);

	return (
		<div id="mainDiv">
			<Intro desc={ECO_info.moves}>{ECO_info.name} ({ECO_info.eco})</Intro>
			<Board fen={ECO_FEN} />
			<a href="/" className="navFromOpening">Return Home</a>
			<a href={"/" + category} className="navFromOpening right">Return to {category}XX</a>
		</div>
	);
}