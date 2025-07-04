import Board from "@/components/Board";

export default async function A00() {
	const ECO_A00 = {
		"src": "eco_tsv",
		"eco": "A00",
		"moves": "1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4",
		"name": "Amar Gambit"
	}, A00_FEN = "rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQK2R w KQkq - 0 5";

	return (
		<div id="mainDiv">
			<div id="intro">
				<p className="powerful">{ECO_A00.name}</p>
				{ECO_A00.moves}
			</div>
			<Board fen={A00_FEN} />
			<a href="/" className="navFromOpening left">Return Home</a>
			<a href="/ECO-AXX" className="navFromOpening right">Return to AXX</a>
		</div>
	);
}