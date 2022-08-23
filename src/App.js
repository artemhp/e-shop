import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import styles from './App.module.css';
import Main from './components/Main/Main';
import List from './components/List/List';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/details" element={<Details />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
      <Container className={styles.footer}>Artem Deikun &copy;</Container>
    </QueryClientProvider>
  );
}

export default App;
