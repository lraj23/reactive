export default function Square({ color, children }) {
	return (
		<div className={"square " + (color % 2 == 0 ? "light" : "dark")}>{children}</div>
	);
}