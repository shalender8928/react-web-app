import SectionDesign from './UI/SectionDesign';
import LeftSideTabs from './SideTabs';
// import Panel from './PageComponents/AccordionPanel';

const Accordions = () => {
	return (
		<SectionDesign heading="FAQ/Contact Us/ToDo List" title="FAQ" id="faq">
			
			<div>
				<LeftSideTabs />
			</div>

			{/*<div className="">
				<Panel title="Title 1">
					This is a sample description
				</Panel>
				<Panel title="Title 2">
					This is a sample description
				</Panel>
				<Panel title="Title 3">
					This is a sample description
				</Panel>
			</div>*/}
		</SectionDesign>
	);
}

export default Accordions;