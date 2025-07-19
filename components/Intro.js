export default function Intro({ desc, children }) {
	return (
		<div id="intro">
			<p className="powerful">{children}</p>
			{desc}
		</div>
	);
}