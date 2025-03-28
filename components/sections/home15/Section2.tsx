
import Link from "next/link"

export default function Section2() {
	return (
		<>

			<section className="box-section overflow-hidden box-section box-features-15">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="card-feature-2">
								<div className="card-title-icon">
									<div className="card-icon">
										<svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M52.4994 27.5005C55.7506 30.7518 58.7819 34.1593 61.5081 37.5893C62.9544 34.4955 63.7494 31.0705 63.7494 27.5005C63.7494 20.553 60.7331 14.313 55.9619 9.9668C51.6769 11.8143 46.9269 14.6305 42.0781 18.2055C45.5419 20.938 49.0481 24.0505 52.4994 27.5005Z" fill="currentColor" />
											<path d="M52.5 67.4992L52.4987 63.7492H49.9987V58.7492H52.5L52.4987 54.9992H49.9987V49.8305C49.9987 49.3592 50.2638 48.9267 50.685 48.7142C54.6162 46.7305 57.8125 43.7742 60.0637 40.2255L60.0612 40.223C60.0712 40.2105 60.08 40.198 60.09 40.1855C60.1325 40.1192 60.18 40.0555 60.2213 39.988C57.3875 36.348 54.1825 32.7192 50.73 29.2667C47.1112 25.648 43.5125 22.483 40.0238 19.7617C36.4113 22.568 32.7762 25.7567 29.2662 29.2667C25.765 32.768 22.5812 36.3942 19.7812 39.998C22.0387 43.6505 25.2962 46.688 29.3125 48.7142C29.7338 48.928 29.9987 49.3592 29.9987 49.8305V54.9992H27.4987V58.7492H29.9987V63.7492H27.4987V67.4992H32.6112V69.9992C33.2087 73.5405 36.2887 76.2492 39.9987 76.2492C43.7087 76.2492 46.7875 73.5405 47.3862 69.9992V67.4992H52.5ZM42.4987 34.9992C42.4987 34.668 42.63 34.3492 42.865 34.1155L46.615 30.3655L48.3825 32.133L44.9987 35.5167V54.9992H42.4987V34.9992ZM31.615 32.133L33.3825 30.3655L37.1325 34.1155C37.3675 34.3492 37.4987 34.668 37.4987 34.9992V54.9992H34.9987V35.5167L31.615 32.133Z" fill="currentColor" />
											<path d="M16.2675 27.9986C16.3062 29.8473 16.555 31.6536 16.9975 33.3948C17.3637 34.8398 17.8613 36.2361 18.485 37.5711C21.17 34.1961 24.1937 30.8061 27.5012 27.4986C30.93 24.0698 34.45 20.9461 37.9487 18.1848C32.9387 14.4848 28.205 11.7411 24.0363 9.96484C19.2663 14.3136 16.25 20.5536 16.25 27.4998C16.25 27.6673 16.2637 27.8323 16.2675 27.9986Z" fill="currentColor" />
											<path d="M53.7812 8.1975C49.89 5.41 45.1375 3.75 39.9963 3.75C34.8438 3.75 30.0838 5.4175 26.1875 8.215C30.4987 10.1825 35.1838 13.0062 39.9987 16.6112C44.7675 13.0362 49.4525 10.1825 53.7812 8.1975Z" fill="currentColor" />
											<path d="M78.7509 8.75C78.7509 4.61375 75.3872 1.25 71.2509 1.25C68.4584 1.25 66.0222 2.78625 64.7322 5.05625C62.2622 5.2075 59.4634 5.9075 56.4509 7.07375C57.1859 7.6675 57.8959 8.29 58.5634 8.9575C60.4497 8.2925 62.2297 7.83 63.8447 7.6275C63.7884 7.99375 63.7509 8.3675 63.7509 8.75C63.7509 12.8862 67.1147 16.25 71.2509 16.25C71.6297 16.25 71.9984 16.2125 72.3622 16.1588C71.8159 20.4675 69.5272 25.9788 65.8684 31.9213C65.2459 35.6113 63.8609 39.0762 61.8209 42.1188C62.5772 43.145 63.3122 44.17 64.0009 45.1888C63.0772 46.0963 62.5009 47.3563 62.5009 48.75C62.5009 51.5075 64.7434 53.75 67.5009 53.75C67.9909 53.75 68.4559 53.6575 68.9047 53.525C72.8747 61.5788 73.5972 67.9925 70.7959 70.795C68.0534 73.5363 61.9934 72.9375 54.2684 69.2675C53.8159 69.72 53.1909 70 52.5009 70H50.2109C56.2747 73.2975 61.6009 74.98 65.7559 74.98C68.6297 74.98 70.9459 74.1787 72.5634 72.5612C76.2859 68.8388 75.7384 61.6425 71.0622 52.25C71.9497 51.3487 72.5009 50.1138 72.5009 48.75C72.5009 45.9925 70.2584 43.75 67.5009 43.75C67.0409 43.75 66.6034 43.8325 66.1797 43.95C65.2984 42.64 64.3659 41.3238 63.3784 40.005C70.4009 30.6288 74.5559 21.7512 74.9559 15.2625C77.2197 13.97 78.7509 11.5375 78.7509 8.75Z" fill="currentColor" />
											<path d="M7.50041 31.2508C7.50041 34.0083 9.74291 36.2508 12.5004 36.2508C13.4217 36.2508 14.2767 35.9908 15.0142 35.552C14.1967 32.9945 13.7504 30.2895 13.7504 27.5008C13.7504 27.1445 13.7892 26.7995 13.8042 26.447C13.3867 26.3308 12.9554 26.2508 12.5004 26.2508C12.0104 26.2508 11.5454 26.3433 11.0967 26.4758C7.12666 18.422 6.40291 12.0083 9.20541 9.20578C11.3642 7.04703 15.7379 6.97953 21.4354 8.96078C22.0942 8.30078 22.7954 7.68328 23.5217 7.09578C16.4254 4.36328 10.6142 4.26328 7.43791 7.43828C3.71541 11.1608 4.26291 18.357 8.93916 27.7495C8.05166 28.652 7.50041 29.887 7.50041 31.2508Z" fill="currentColor" />
											<path d="M25.7312 69.2654C22.15 70.9654 18.905 72.0204 16.1575 72.3654C16.2125 72.0004 16.25 71.6304 16.25 71.2504C16.25 67.1141 12.8862 63.7504 8.75 63.7504C8.3675 63.7504 7.99375 63.7879 7.62625 63.8441C8.35375 58.0204 12.2262 50.2066 18.1825 42.1204C17.675 41.3641 17.2087 40.5804 16.7838 39.7754C9.78375 49.0654 5.46375 58.0754 5.05625 64.7316C2.78625 66.0216 1.25 68.4579 1.25 71.2504C1.25 75.3866 4.61375 78.7504 8.75 78.7504C11.54 78.7504 13.975 77.2154 15.2663 74.9491C19.2738 74.6991 24.2625 73.0066 29.7913 70.0004H27.5C26.81 70.0004 26.1837 69.7191 25.7312 69.2654Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-arrow">
										<Link href="#">
											<svg width={71} height={50} viewBox="0 0 71 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M47.3333 50C47.3333 47.35 49.5018 43.3929 51.6969 40.0714C54.5191 35.7857 57.8916 32.0464 61.7582 29.1929C64.6573 27.0536 68.1718 25 71 25M71 25C68.1718 25 64.6544 22.9464 61.7582 20.8071C57.8916 17.95 54.5191 14.2107 51.6969 9.93215C49.5018 6.60715 47.3333 2.64286 47.3333 2.78262e-06M71 25L3.0027e-06 25" stroke="currentColor" strokeWidth="1.5" />
											</svg>
										</Link>
									</div>
								</div>
								<div className="card-info">
									<h3>Business Innovations</h3>
									<p className="paragraph-base">Highly Recommended for you</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-feature-2">
								<div className="card-title-icon">
									<div className="card-icon">
										<svg width={66} height={80} viewBox="0 0 66 80" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M28.3099 17.9304C32.3494 17.4755 35.2555 13.832 34.8006 9.79232C34.6691 8.62519 34.2702 7.55369 33.6738 6.62956L32.7309 7.00102H31.0952L32.5673 6.26497L32.9235 5.65656C32.4007 5.08439 31.7907 4.59748 31.1169 4.21457L31.1655 4.1675L31.8024 3.82439L32.8372 3.80794L32.8878 2.84393L33.9282 2.74298L33.8809 2.2545L32.4198 2.39634L32.3711 3.32456L31.675 3.33559L30.903 3.75154L30.6644 3.97779C30.5199 3.90844 30.3736 3.84275 30.2244 3.78278L30.0002 2.40145L30.4956 1.37659L30.0108 0L29.5479 0.162914L29.965 1.34686L29.4911 2.32732L29.6969 3.59546C29.4564 3.5196 29.2113 3.45555 28.9618 3.40451L28.5331 1.89317L27.4038 1.4606L27.2311 0.12971L26.7445 0.192978L26.9549 1.81397L28.128 2.26346L28.4265 3.31576C27.8532 3.24235 27.2624 3.23414 26.6625 3.30169C22.6225 3.75664 19.717 7.40003 20.1719 11.4397C20.6268 15.4794 24.2699 18.3853 28.3099 17.9304ZM30.2715 7.48195C30.8668 7.91766 31.101 8.61041 30.7945 9.02921C30.4879 9.44801 28.332 7.87023 28.6385 7.45139C28.9451 7.03256 29.6762 7.04627 30.2715 7.48195ZM26.0809 5.78483C26.817 5.83357 27.386 6.29294 27.3517 6.81079C27.3174 7.32865 24.6516 7.1521 24.6859 6.63424C24.7202 6.11638 25.3448 5.73608 26.0809 5.78483ZM23.3548 9.40326C23.7285 8.6655 26.9889 9.65967 26.9889 9.65967C26.9889 9.65967 30.1982 10.8092 30.0574 11.6241C29.9166 12.439 29.1661 14.574 28.8167 14.4583C28.6068 14.3887 28.5756 14.2026 28.5336 14.048V16.2684C28.5336 16.3883 28.4355 16.4865 28.3155 16.4865C28.1956 16.4865 28.0974 16.3883 28.0974 16.2684V13.7038C27.9697 13.6452 27.8074 13.5701 27.6204 13.4854V15.3483C27.6204 15.4682 27.5222 15.5664 27.4023 15.5664C27.2823 15.5664 27.1842 15.4682 27.1842 15.3483V13.2926C26.8172 13.1353 26.3929 12.9659 25.9429 12.8168C25.0342 12.5157 24.1596 12.3429 23.6924 12.2435V15.0979C23.6924 15.2178 23.5943 15.316 23.4743 15.316C23.3544 15.316 23.2562 15.2179 23.2562 15.0979V12.1805C23.0877 12.2486 22.9381 12.5104 22.6576 12.4175C22.3082 12.3017 22.9811 10.141 23.3548 9.40326Z" fill="currentColor" />
											<path d="M65.5419 30.4387L58.8044 19.0941L55.8744 20.8342L54.2597 18.1152L51.5348 19.7335C51.3668 19.4155 51.1322 19.1263 50.8299 18.8911L49.2092 17.6307C48.1729 16.8248 46.7004 16.9107 45.7658 17.8323L37.6388 25.8386L32.2679 21.8501C32.0331 21.6756 31.7782 21.5486 31.5145 21.4631C31.3514 21.3739 31.1772 21.2997 30.9907 21.2468L24.1817 19.3147L22.3559 19.8585L21.5455 19.5344L19.7627 20.7229L19.4516 17.9229L9.8523 15.3611L8.11006 4.78348C7.98323 4.01373 7.51968 3.34061 6.84545 2.94766C6.17122 2.5547 5.35704 2.48348 4.62481 2.75245L2.17577 3.65273C0.81913 4.15142 0.123669 5.6555 0.622357 7.0121C1.0565 8.1932 2.25134 8.87348 3.45046 8.7002L4.17542 13.1017L5.77067 11.8558L4.47286 14.9074L4.96235 17.8793C5.12942 18.8943 5.87588 19.7173 6.86992 19.9826L8.57918 20.4387C8.48306 22.1948 8.41803 25.1651 8.41803 26.6424C8.41803 28.8183 8.55896 29.2404 8.73283 29.2404C8.90671 29.2404 9.04764 28.8183 9.04764 26.6424C9.04764 25.1881 8.98463 22.2872 8.89097 20.5219L14.9701 22.1441L12.1896 31.9431L16.3413 32.7339L11.7803 33.3855L9.60184 41.0626C9.58967 41.1056 9.58198 41.1486 9.57217 41.1917C9.31913 41.7534 9.19298 42.382 9.23312 43.0396L9.80754 52.4491L11.1731 52.9744L13.6312 53.2174L9.9559 54.8799L10.1883 58.6872L2.01053 74.0667C0.992708 75.9809 1.71935 78.358 3.63359 79.3758C4.22077 79.6881 4.85155 79.8361 5.47324 79.8361C6.87826 79.8361 8.23696 79.0798 8.94269 77.7527L15.5803 65.2698C15.523 67.2145 15.4888 69.2549 15.4888 70.51C15.4888 73.4971 15.6823 74.0765 15.9209 74.0765C16.1596 74.0765 16.3531 73.4971 16.3531 70.51C16.3531 68.9905 16.303 66.3204 16.2224 64.0623L17.6403 61.3958C17.9802 60.7567 18.1366 60.0362 18.0925 59.3135L17.2715 45.867L19.9589 46.6296L22.6316 59.1873C22.5718 61.1745 22.5358 63.2852 22.5358 64.5712C22.5358 67.5583 22.7293 68.1377 22.968 68.1377C23.2067 68.1377 23.4002 67.5583 23.4002 64.5712C23.4002 63.8292 23.3882 62.8124 23.3666 61.7034L27.9317 70.4687C28.6939 70.3747 29.5658 70.2585 29.5658 70.2585L31.9448 71.396L30.3241 72.9627L29.9188 74.2842L31.795 77.8865C32.4948 79.2302 33.8631 79.9997 35.2801 79.9997C35.8907 79.9997 36.5108 79.8565 37.09 79.555C39.0129 78.5534 39.76 76.1828 38.7584 74.2599L30.4865 58.3768L27.3134 43.4681L28.2068 40.3195L25.057 37.686L28.5369 39.1564L31.7144 27.9585L36.3181 31.3774C36.7839 31.7236 37.332 31.8935 37.8778 31.8935C37.9238 31.8935 37.9696 31.8894 38.0154 31.887C37.9103 34.3092 37.8423 37.6432 37.8423 39.4137C37.8423 42.4008 38.0358 42.9802 38.2745 42.9802C38.5132 42.9802 38.7067 42.4008 38.7067 39.4137C38.7067 37.6237 38.6371 34.2367 38.5301 31.8084C38.965 31.6967 39.3759 31.4749 39.715 31.1407L39.9073 30.9513C39.8551 32.522 39.8231 34.2915 39.8231 35.327C39.8231 37.5029 39.9641 37.925 40.138 37.925C40.3118 37.925 40.4528 37.5029 40.4528 35.327C40.4528 34.1935 40.4144 32.1809 40.3532 30.512L46.3301 24.6237L47.1549 26.0126L44.2251 27.7527L48.5345 35.0088L49.1809 34.8472L50.4774 34.0909L51.1257 32.9564L51.6119 33.5507L51.384 34.7868L50.3154 35.6035L49.4741 36.5911L50.9626 39.0974L51.0732 39.0317C50.9981 41.2301 50.9518 43.7523 50.9518 45.2121C50.9518 48.1992 51.1453 48.7787 51.384 48.7787C51.6226 48.7787 51.8162 48.1992 51.8162 45.2121C51.8162 43.6714 51.7646 40.9478 51.682 38.6702L65.5419 30.4387ZM25.2178 26.8121C24.4011 32.2393 22.7285 36.1442 21.4674 40.3575C19.9124 41.251 16.8357 43.0872 16.8357 43.0872C16.8357 43.0872 16.7115 39.6717 16.1683 38.062C17.3508 36.3863 18.4607 34.8588 19.5397 33.1813L22.0677 33.2466L20.5806 31.4934C21.4087 30.0856 22.2259 28.5272 23.0516 26.674C23.0196 26.5021 22.8731 26.0022 22.8407 25.8295C23.5734 26.507 24.7565 26.5158 25.5925 26.2702C25.4705 26.4539 25.3458 26.6349 25.2178 26.8121ZM25.9595 25.0103C25.5004 25.315 24.9658 25.4344 24.4478 25.3781C23.93 25.3208 23.4348 25.089 23.0528 24.6929L22.9881 24.5607L23.7194 22.6019L24.7404 22.7138L25.7609 22.8257L26.0505 24.8964L25.9595 25.0103ZM48.4207 25.2609L47.5576 23.8077L48.2598 23.3906C49.3132 23.808 50.5576 23.5033 51.2889 22.5638C51.59 22.1766 51.7623 21.7313 51.8179 21.2776L53.7456 20.1327L54.6087 21.5859L48.4207 25.2609Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-arrow">
										<Link href="#">
											<svg width={71} height={50} viewBox="0 0 71 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M47.3333 50C47.3333 47.35 49.5018 43.3929 51.6969 40.0714C54.5191 35.7857 57.8916 32.0464 61.7582 29.1929C64.6573 27.0536 68.1718 25 71 25M71 25C68.1718 25 64.6544 22.9464 61.7582 20.8071C57.8916 17.95 54.5191 14.2107 51.6969 9.93215C49.5018 6.60715 47.3333 2.64286 47.3333 2.78262e-06M71 25L3.0027e-06 25" stroke="currentColor" strokeWidth="1.5" />
											</svg>
										</Link>
									</div>
								</div>
								<div className="card-info">
									<h3>Business Infections</h3>
									<p className="paragraph-base">Highly Recommended for you</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-feature-2">
								<div className="card-title-icon">
									<div className="card-icon">
										<svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M40.003 20.9601L42.9434 16.5508H37.0625L40.003 20.9601Z" fill="currentColor" />
											<path d="M1.375 46.8968C1.375 50.7053 4.46296 53.7933 8.27155 53.7933H16.5474C18.8326 53.7933 20.6853 55.6461 20.6853 57.9312V77.2416H26.2026V52.414C26.2026 48.6054 23.1146 45.5174 19.306 45.5174H13.7888C11.5036 45.5174 9.65086 43.6647 9.65086 41.3795V26.2071C9.65086 25.4454 10.2685 24.8278 11.0302 24.8278C11.7919 24.8278 12.4095 25.4454 12.4095 26.2071V41.3795C12.4095 42.1412 13.0271 42.7588 13.7888 42.7588H30.3405V37.2416H17.9267V23.4485C17.9267 21.1633 16.0739 19.3105 13.7888 19.3105H8.27155C4.46296 19.3105 1.375 22.3985 1.375 26.2071V46.8968Z" fill="currentColor" />
											<path d="M78.6218 46.8968V26.2071C78.6218 22.3985 75.5338 19.3105 71.7252 19.3105H66.208C63.9228 19.3105 62.07 21.1633 62.07 23.4485V37.2416H49.6562V42.7588H66.208C66.9697 42.7588 67.5873 42.1412 67.5873 41.3795V26.2071C67.5873 25.4454 68.2049 24.8278 68.9666 24.8278C69.7283 24.8278 70.3459 25.4454 70.3459 26.2071V41.3795C70.3459 43.6647 68.4931 45.5174 66.208 45.5174H60.6907C56.8821 45.5174 53.7942 48.6054 53.7942 52.414V77.2416H59.3114V57.9312C59.3114 55.6461 61.1642 53.7933 63.4494 53.7933H71.7252C75.5338 53.7933 78.6218 50.7053 78.6218 46.8968Z" fill="currentColor" />
											<path d="M27.5859 34.4822H33.1032V42.7581H46.8963V34.4822H52.4135V23.4477C52.4021 19.9166 49.7202 16.9674 46.2066 16.6212L39.9997 25.9302L33.7928 16.6172C30.2772 16.9634 27.5954 19.9153 27.5859 23.4477V34.4822Z" fill="currentColor" />
											<path d="M4.14062 56.0684H6.89925V79.9995H4.14062V56.0684Z" fill="currentColor" />
											<path d="M73.1016 56.0684H75.8602V79.9995H73.1016V56.0684Z" fill="currentColor" />
											<path d="M41.3774 53.793H38.6188V77.2412H33.1016V79.9999H46.8947V77.2412H41.3774V53.793Z" fill="currentColor" />
											<path d="M73.1056 9.65436C73.1056 13.463 70.0176 16.5509 66.2091 16.5509C62.4005 16.5509 59.3125 13.463 59.3125 9.65436C59.3125 5.84577 62.4005 2.75781 66.2091 2.75781C70.0176 2.75781 73.1056 5.84577 73.1056 9.65436Z" fill="currentColor" />
											<path d="M51.1456 51.0348C51.4473 48.9376 52.432 46.9986 53.9467 45.5176H26.0547C27.5694 46.9986 28.554 48.9376 28.8557 51.0348H51.1456Z" fill="currentColor" />
											<path d="M46.8947 6.89655C46.8947 10.7051 43.8067 13.7931 39.9981 13.7931C36.1895 13.7931 33.1016 10.7051 33.1016 6.89655C33.1016 3.08796 36.1895 0 39.9981 0C43.8067 0 46.8947 3.08796 46.8947 6.89655Z" fill="currentColor" />
											<path d="M20.6915 9.65436C20.6915 13.463 17.6036 16.5509 13.795 16.5509C9.98639 16.5509 6.89844 13.463 6.89844 9.65436C6.89844 5.84577 9.98639 2.75781 13.795 2.75781C17.6036 2.75781 20.6915 5.84577 20.6915 9.65436Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-arrow">
										<Link href="#">
											<svg width={71} height={50} viewBox="0 0 71 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M47.3333 50C47.3333 47.35 49.5018 43.3929 51.6969 40.0714C54.5191 35.7857 57.8916 32.0464 61.7582 29.1929C64.6573 27.0536 68.1718 25 71 25M71 25C68.1718 25 64.6544 22.9464 61.7582 20.8071C57.8916 17.95 54.5191 14.2107 51.6969 9.93215C49.5018 6.60715 47.3333 2.64286 47.3333 2.78262e-06M71 25L3.0027e-06 25" stroke="currentColor" strokeWidth="1.5" />
											</svg>
										</Link>
									</div>
								</div>
								<div className="card-info">
									<h3>It Consulting</h3>
									<p className="paragraph-base">Highly Recommended for you</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
