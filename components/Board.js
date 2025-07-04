import Square from "@/components/Square";

export default function Board({ fen }) {
	var parsedFen = fen.split(" ")[0].split("2").join("11").split("3").join("111").split("4").join("1111").split("5").join("11111").split("6").join("111111").split("7").join("1111111").split("8").join("11111111").split("/"); // replaces blocks of empty space with clear, wide space
	var squares = [];
	for (let i = 0; i < 8; i++) {
		squares[i] = [];
		for (let j = 0; j < 8; j++) {
			if (parsedFen[i][j] !== "1") {
				squares[i][j] = (
					<Square color={(i + j)} key={8 * i + j}><img src={"/chess_pieces/" + (parsedFen[i][j].toUpperCase() === parsedFen[i][j] ? "w" : "b") + parsedFen[i][j].toLowerCase() + ".png"} /></Square>
				);
			} else squares[i][j] = (
				<Square color={(i + j)} key={8 * i + j}></Square>
			);
		}
	}
	return (
		<div id="board">{squares}</div>
	);
}