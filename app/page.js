export default function Home() {
	return (
		< div id="mainDiv" >
			<div id="intro">
				<p className="powerful">Chess ECO: Your Openings Catalogue</p>
				Learn openings with this comprehensive list!
			</div>
			<div id="links">
				<a className="link" href="A">Openings with ECO starting with A</a>
				<a className="link" href="B">Openings with ECO starting with B</a>
				<a className="link" href="C">Openings with ECO starting with C</a>
				<a className="link" href="D">Openings with ECO starting with D</a>
				<a className="link" href="E">Openings with ECO starting with E</a>
			</div>
		</div >
	);
}