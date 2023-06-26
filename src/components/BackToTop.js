import React, {useState} from 'react';

const BackToTop = () => {
	
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300){
		setVisible(true)
		}
		else if (scrolled <= 300){
		setVisible(false)
		}
	};

	const scrollToTop = () =>{
		window.scrollTo({
		top: 0,
		behavior: 'smooth'
		/* you can also use 'auto' behaviour
			in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<a href="#top" className="scroll-top btn-hover" onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}}>
		 <i className="lni lni-chevron-up"></i>
		</a>
	);
}

export default BackToTop;