export default function Opening({ info }) {
	return (
		<a href={"/" + info.eco[0] + "/" + encodeURIComponent(info.moves)} className="listItem">
			<p className="openingName">{info.name} ({info.eco})</p>
			<p className="openingMoves">{info.moves}</p>
		</a>
	);
}