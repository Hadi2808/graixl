
'use client'
import { swiperGroupSlideText } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { useEffect, useRef } from 'react';



export default function Section4() {

	
	return (
		<>

			<div className="box-swiper">
				<Swiper {...swiperGroupSlideText} className="swiper-container swiper-group-slide-text">
					<div className="swiper-wrapper">
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration1.webp"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration2.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration3.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration4.webp"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration5.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration6.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration1.webp"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration2.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration3.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration4.webp"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration5.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<Image
									src="/assets/imgs/pages/home11/integration6.png"
									alt="image"
									width={120} // Set appropriate width
									height={100} // Set appropriate height
									className="swiper-slide-image"
									style={{"objectFit":"contain"}}
								/>
							</div>
						</SwiperSlide>
					</div>
				</Swiper>
			</div>
		</>
	)
}
