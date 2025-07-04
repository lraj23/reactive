export default function Link({ href, index, total, children }) {
	return (
		<a href={href} className="link" style={{ width: (80 / total) + "vw", left: ((index * 100 - 50) / total) + "vw", transform: "translateX(-50%)" }}>{children}</a>
	);
}