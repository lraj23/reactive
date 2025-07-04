import Board from "@/components/Board";

export default function E00() {
	const ECO_E00 = {
        "src": "eco_tsv",
        "eco": "E00",
        "moves": "1. d4 Nf6 2. c4 e6 3. g3",
        "name": "Catalan Opening",
        "scid": "E00g",
        "aliases": {
            "scid": "Catalan",
            "ct": "Catalan Opening, General"
        }
    }, E00_FEN = "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3";

	return (
		<div id="mainDiv">
			<div id="intro">
				<p className="powerful">{ECO_E00.name}</p>
				{ECO_E00.moves}
			</div>
			<Board fen={E00_FEN} />
			<a href="/" className="navFromOpening left">Return Home</a>
			<a href="/ECO-EXX" className="navFromOpening right">Return to EXX</a>
		</div>
	);
}