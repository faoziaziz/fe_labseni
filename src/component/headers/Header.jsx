
import { Button, Navbar } from 'react-bootstrap'
import logo from './logo.svg'
const Header = () => {
    return (
	<div>
	  <>
	    <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="https://labseni.com">
		<img
		  alt=""
		  src={logo}
		  width="30"
		  height="30"
		  className="d-inline-block align-top"
		  />{' '}
		LabSeni
              </Navbar.Brand>
	      <Navbar.Brand href="https://labseni.com/notes">
		Notes
              </Navbar.Brand>
	      <Navbar.Brand href="https://labseni.com/product">
		Product
              </Navbar.Brand>

	      <Navbar.Brand href="https://labseni.com/news">
		News
              </Navbar.Brand>
	    </Navbar>
	  </>
	  
	</div>
    );
}

export default Header;

