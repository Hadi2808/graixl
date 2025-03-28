
import Link from "next/link"

export default function Section7() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-new-models">
				<div className="container">
					<div className="block-new-models wow img-custom-anim-left">
						<div className="new-models-left">
							<h2 className="display-ag-5xl color-white">Let your candidates speak <span className="heading-3xl-regular text-uppercase" style={{ paddingLeft: "24px" }}>we will handle the rest</span></h2>
						</div>
						<div className="new-models-right">
							<Link href="#" className="btn btn-primary-square bdrd-10" style={{ background: '#2cb881' }}>Watch a demo</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
