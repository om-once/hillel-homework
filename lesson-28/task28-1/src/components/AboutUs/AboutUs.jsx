import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
const AboutUs = () => {
	const [theme] = useContext(ThemeContext);
	return (
		<div className={`main about ${theme.addClass}`}>
			<div className='main__content'>
				<h2 className='title'>About Us</h2>
				<p className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste
					magnam laborum eligendi nulla placeat ipsa dolorem quidem accusantium
					sequi nemo quo aut voluptates quisquam temporibus maxime natus eaque
					nostrum ullam nisi nihil autem, dolore repudiandae quam. Tempore nulla
					eaque consectetur, dignissimos ipsa velit quasi distinctio maxime ex,
					delectus dolore.
				</p>
				<p className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
					voluptatem numquam quaerat! Quaerat maxime rem tempora reprehenderit
					et ipsum deserunt!
				</p>
				<p className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					dicta tenetur labore quaerat iusto voluptas ut quidem quis architecto
					voluptatibus laboriosam recusandae, eius ad amet! Accusamus
					voluptatibus maiores vel numquam dolore aspernatur, accusantium neque
					aliquam repellendus, quis earum in quidem.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
