
'use client'
import CountUp from 'react-countup'
export default function Section5() {
	return (
		<>

			<section className="position-relative overflow-hidden box-number-9">
				<div className="container text-center d-flex flex-column align-items-center">
					<div className="box-info-about-top">
						<h2 className="heading-ag-3xl dark-950 mb-3">
							We are results-driven<br className="d-none d-lg-block" />
							Take a Look
						</h2>
					</div>
					<div className="w-50">
						<p className="mb-40 paragraph-rubik-r neutral-1700">With data-backed efficiency, we empower teams to hire faster, smarter, and at scale—without compromising quality or fairness. Transform your recruitment process with AI-driven precision and focus on what matters most: finding the best talent.</p>
					</div>
				</div>

				<div className="container">
					<div className="box-list-numbers">
						<div className="item-number" data-aos="fade-up" data-aos-duration={0}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/success.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={43} /><span className="d-inline-block align-middle">%</span></h4>
								<p className="paragraph-18-fitree gray-1000">Reduced Hiring Time</p>
							</div>
						</div>
						<div className="item-number" data-aos="fade-up" data-aos-duration={500}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/project.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={20} /><span className="d-inline-block align-middle">x</span></h4>
								<p className="paragraph-18-fitree gray-1000">More Hiring Capacity</p>
							</div>
						</div>
						<div className="item-number" data-aos="fade-up" data-aos-duration={1000}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/client2.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={90} /><span className="d-inline-block align-middle">%</span></h4>
								<p className="paragraph-18-fitree gray-1000">Reduced Hiring Costs</p>
							</div>
						</div>
						<div className="item-number" data-aos="fade-up" data-aos-duration={1500}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/trade2.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={0} /></h4>
								<p className="paragraph-18-fitree gray-1000">Scheduling Hassle</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
