import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home11/Section1'
import Section2 from '@/components/sections/home11/Section2'
import Section3 from '@/components/sections/home11/Section3'
import Section4 from '@/components/sections/home11/Section4'
import Section5 from '@/components/sections/home11/Section5'
import Section6 from '@/components/sections/home11/Section6'
import Section7 from '@/components/sections/home11/Section7'
import Section8 from '@/components/sections/home11/Section8'
import Section9 from '@/components/sections/home11/Section9'
import AboutUs from "@/components/sections/about/About"
import FAQ from "@/components/sections/faq/faq"
import Pricing from '@/components/sections/home1/Section5'
import Steps from '@/components/sections/home10/Section4'
import Countup from '@/components/sections/home9/Section5'



export default function Home() {

	return (
		<>

			<Layout headerStyle={11} footerStyle={11}>
				<Section1 id="home" />
				<Section3 id="product" />
				<Steps id="steps" />
				<Section2 />
				<AboutUs id="about" />
				<Countup />
				<Pricing id="pricing" />
				<FAQ id="faq" />
				<Section4 id="contact" />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
			</Layout>
		</>
	)
}