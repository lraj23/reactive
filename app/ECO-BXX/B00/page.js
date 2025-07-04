import Board from "@/components/Board";

export default async function B00() {
	const ECO_B00 = {
		"src": "eco_tsv",
		"eco": "B00",
		"moves": "1. e4 f6",
		"name": "Barnes Defense"
	}, B00_FEN = "rnbqkbnr/ppppp1pp/5p2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2";

	return (
		<div id="mainDiv">
			<div id="intro">
				<p className="powerful">{ECO_B00.name}</p>
				{ECO_B00.moves}
			</div>
			<Board fen={B00_FEN} />
			<a href="/" className="navFromOpening left">Return Home</a>
			<a href="/ECO-BXX" className="navFromOpening right">Return to BXX</a>
		</div>
	);
}