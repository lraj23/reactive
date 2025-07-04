export default function Opening({ info }) {
	// console.log(info);
	return (
		<div className="listItem">
			<p className="openingName">{info.name} ({info.eco}) <span className="failure">(Not Available Yet)</span></p>
			<p className="openingMoves">{info.moves}</p>
		</div>
	);
}