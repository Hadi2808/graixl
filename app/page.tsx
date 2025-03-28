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

export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={11}>
				<Section1 />
				<AboutUs />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<FAQ/>
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
			</Layout>
		</>
	)
}