import ECO from "@/components/ECO";

export default async function CategoryPage({ params }) {
	const { category } = await params;
	if (!"ABCDE".split("").includes(category))
		return (
			<div id="mainDiv">
				<div id="intro">
					<p className="powerful">This isn't a category...</p>
				</div>
				<a href="/" className="navFromOpening">Return Home</a>
			</div>
		);

	return (
		<>
			<ECO letter={category} />
			<a href="#top" id="toTop">Scroll to top</a>
		</>
	);
}