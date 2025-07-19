export default function Board({ fen }) {
	var parsedFen = fen.split(" ")[0].split("2").join("11").split("3").join("111").split("4").join("1111").split("5").join("11111").split("6").join("111111").split("7").join("1111111").split("8").join("11111111").split("/"); // replaces blocks of empty space with clear, wide space
	var squares = [];

	for (let i = 0; i < 8; i++) {
		squares[i] = [];
		for (let j = 0; j < 8; j++) {
			let fenChar = parsedFen[i][j];
			if (fenChar !== "1") {
				squares[i][j] = (
					<div className={"square " + ((i + j) % 2 == 0 ? "light" : "dark")} key={8 * i + j}><img src={"/chess_pieces/" + (fenChar.toUpperCase() === fenChar ? "w" : "b") + fenChar.toLowerCase() + ".png"} /></div>
				);
			} else squares[i][j] = (
				<div className={"square " + ((i + j) % 2 == 0 ? "light" : "dark")} key={8 * i + j}></div>
			);
		}
		squares[i].push(
			<br key={"br" + i} />
		);
	}
	return (
		<div id="board">{squares}</div>
	);
}