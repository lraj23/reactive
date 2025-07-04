import Board from "@/components/Board";

export default async function C00() {
	const ECO_C00 = {
        "src": "eco_tsv",
        "eco": "C00",
        "moves": "1. e4 e6",
        "name": "French Defense",
        "scid": "C00a",
        "aliases": {
            "scid": "French",
            "ct": "French Defense, General",
            "chessGraph": "French Defense; C00",
            "icsbot": "French Defense; C00 "
        },
        "isEcoRoot": true
    }, C00_FEN = "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2";

	return (
		<div id="mainDiv">
			<div id="intro">
				<p className="powerful">{ECO_C00.name}</p>
				{ECO_C00.moves}
			</div>
			<Board fen={C00_FEN} />
			<a href="/" className="navFromOpening left">Return Home</a>
			<a href="/ECO-CXX" className="navFromOpening right">Return to CXX</a>
		</div>
	);
}