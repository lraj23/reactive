import List from "@/components/Lists";

export default async function ECO({ letter }) {
	var category = {};

	await fetch("https://raw.githubusercontent.com/hayatbiralem/eco.json/refs/heads/master/eco" + letter + ".json").then((res) => res.json()).then((data) => category = data);

	return (
		<div id="mainDiv">
			<div id="intro">
				<p className="powerful">ECO codes starting with {letter}</p>
				Access information about every opening with an ECO code like {letter}XX.
			</div>
			<br/>
			<a href="/" className="navFromCategory">Return Home</a>
			<List data={category} />
		</div>
	);
}