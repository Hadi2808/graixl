'use client'
import { useEffect, useState } from "react"

export default function BackToTop({ target }: any) {
	const [hasScrolled, setHasScrolled] = useState(false)
	const [dashOffset, setDashOffset] = useState(139.989)  // Set initial stroke-dashoffset
	const strokeLength = 139.989  // This should match the total length of the path

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
			const hasScrolledValue = scrollY > 100;
			setHasScrolled(hasScrolledValue)

			// Dynamically toggle the 'active-progress' class
			const button = document.querySelector('.btn-scroll-top');
			if (button) {
				if (hasScrolledValue) {
					button.classList.add('active-progress');
				} else {
					button.classList.remove('active-progress');
				}
			}

			// Calculate the stroke-dashoffset dynamically based on scroll position
			const offset = strokeLength - (scrollY / scrollHeight) * strokeLength;
			setDashOffset(Math.max(offset, 0));  // Prevent negative dashoffset
		}

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: document.querySelector(target)?.offsetTop ?? 0, // Ensure valid target
			behavior: 'smooth'
		});
	}

	return (
		// Always render the div, 'active-progress' will toggle based on scroll position
		<div className="btn-scroll-top" onClick={handleClick}>
			<svg className="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
				<path
					d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z"
					style={{
						strokeDasharray: strokeLength,
						strokeDashoffset: dashOffset,
						transition: 'stroke-dashoffset 10ms linear'
					}}
				/>
			</svg>
		</div>
	)
}
