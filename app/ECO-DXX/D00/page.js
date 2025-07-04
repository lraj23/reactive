import Board from "@/components/Board";

export default function D00() {
	const ECO_D00 = {
        "src": "eco_tsv",
        "eco": "D00",
        "moves": "1. d4 d5 2. Qd3",
        "name": "Amazon Attack"
    }, D00_FEN = "rnbqkbnr/ppp1pppp/8/3p4/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq - 1 2";

	return (
		<div id="mainDiv">
			<div id="intro">
				<p className="powerful">{ECO_D00.name}</p>
				{ECO_D00.moves}
			</div>
			<Board fen={D00_FEN} />
			<a href="/" className="navFromOpening left">Return Home</a>
			<a href="/ECO-DXX" className="navFromOpening right">Return to DXX</a>
		</div>
	);
}