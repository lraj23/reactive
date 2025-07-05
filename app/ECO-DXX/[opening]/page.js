import Board from "@/components/Board";

export default async function OpeningPage({ params }) {
	var { opening } = await params;
	opening = decodeURIComponent(opening);
	var category = {};

	await fetch("https://raw.githubusercontent.com/hayatbiralem/eco.json/refs/heads/master/ecoD.json").then((res) => res.json()).then((data) => category = data);

	var ECO_info = {}, ECO_FEN = {};
	for (let i = 0; i < Object.entries(category).length; i++) {
		if (Object.entries(category)[i][1].moves == opening) {
			ECO_info = category[Object.keys(category)[i]];
			ECO_FEN = Object.keys(category)[i];
		}
	}
	if (Object.keys(ECO_info).length === 0 || Object.keys(ECO_FEN).length === 0)
		return (
			<div id="mainDiv">
				<div id="intro">
					<p className="powerful">This isn't an opening...</p>
				</div>
				<a href="/" className="navFromOpening">Return Home</a>
			</div>
		);

	return (
		<div id="mainDiv">
			<div id="intro">
				<p className="powerful">{ECO_info.name} ({ECO_info.eco})</p>
				{ECO_info.moves}
			</div>
			<Board fen={ECO_FEN} />
			<a href="/" className="navFromOpening">Return Home</a>
			<a href="/ECO-DXX" className="navFromOpening right">Return to DXX</a>
		</div>
	);
}