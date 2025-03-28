'use client'
import CountUp from 'react-countup'

export default function Section1({ id }: { id: string }) {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-banner-11" id={id}>
				<div className="box-banner-11-inner">
					<div className="container">
						<div className="banner">
							<p style={{ visibility: 'hidden' }} className="sub-heading-ag-sm text-uppercase primary-500 mb-1" data-aos="fade-up">
								CONSULTING

							</p>
							<h1 className="display-ag-2xl gray-1100 mb-3" data-aos="fade-up"><span>Revolutionizing <span className='bold'>Recruitment with</span> <strong className="primary-1200">Voice AI</strong></span></h1>
							<p className="paragraph-rubik-r gray-800 desc-banner" data-aos="fade-up">Empowering companies with AI-driven, unbiased, <br /> and scalable candidate assessments.</p>
							<div style={{ visibility: 'hidden' }} className="form-search" data-aos="fade-up">
								<form className="form" action="#">
									<input type="text" className="form-control" placeholder="Search Here" />
									<button type="submit" className="btn btn-search">
										<svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20.5312 18.8438C21.1172 19.4688 21.1172 20.4453 20.5312 21.0703C19.9062 21.6562 18.9297 21.6562 18.3047 21.0703L13.6562 16.3828C12.0547 17.4375 10.1016 17.9844 7.99219 17.7109C4.39844 17.2031 1.50781 14.2734 1.03906 10.7188C0.375 5.40625 4.86719 0.914062 10.1797 1.57812C13.7344 2.04688 16.6641 4.9375 17.1719 8.53125C17.4453 10.6406 16.8984 12.5938 15.8438 14.1562L20.5312 18.8438ZM4.08594 9.625C4.08594 12.3984 6.3125 14.625 9.08594 14.625C11.8203 14.625 14.0859 12.3984 14.0859 9.625C14.0859 6.89062 11.8203 4.625 9.08594 4.625C6.3125 4.625 4.08594 6.89062 4.08594 9.625Z" fill="currentColor" />
										</svg>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
