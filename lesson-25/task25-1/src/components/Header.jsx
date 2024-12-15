import Button from './Button';
import Form from './Form';
import Input from './Input';
import TextElement from './TextElement';

const Header = () => (
	<header>
		<h1>SWAPI</h1>
		<Form>
			<TextElement>https://swapi.dev/api/</TextElement>
			<Input />
			<Button>Get Info</Button>
		</Form>
	</header>
);

export default Header;
