export default function Home() {
	return (
		< div id="mainDiv" >
			<div id="intro">
				<p className="powerful">Chess ECO: Your Openings Catalogue</p>
				Learn openings with this comprehensive list!
			</div>
			<div id="links">
				<a className="link" href="ECO-AXX">Openings with ECO starting with A</a>
				<a className="link" href="ECO-BXX">Openings with ECO starting with B</a>
				<a className="link" href="ECO-CXX">Openings with ECO starting with C</a>
				<a className="link" href="ECO-DXX">Openings with ECO starting with D</a>
				<a className="link" href="ECO-EXX">Openings with ECO starting with E</a>
			</div>
		</div >
	);
}