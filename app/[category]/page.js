import ECO from "@/components/ECO";
import Intro from "@/components/Intro";

export default async function CategoryPage({ params }) {
	const { category } = await params;
	if (!"ABCDE".split("").includes(category)) return (
		<div id="mainDiv">
			<Intro desc="">This isn't a category...</Intro>
			<a href="/" className="navFromOpening">Return Home</a>
		</div>
	);

	return (
		<ECO letter={category} />
	);
}