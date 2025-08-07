import HeroSection from '@/components/Home/HeroSection.jsx';
import BestSellers from '@/components/Home/BestSellers.jsx';
import Categories from '@/components/Home/Categories.jsx';
import FeatureHighlight from '@/components/Home/FeatureHighlight.jsx';
import WhyChooseUs from '@/components/Home/WhyChooseUs.jsx';

export default function HomePage() {

	return (
		<>
			<HeroSection />
			<BestSellers />
			<Categories />
			<WhyChooseUs />
			<FeatureHighlight />
		</>
	);
}
