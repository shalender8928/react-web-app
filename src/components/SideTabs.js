import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AccordionView from './UI/AccordionView';
import ContactUs from './ContactUs';
import ToDoList from './ToDoList/ToDoList';
import FilterProducts from './FilterProducts';
import TicTocToeGame from './TicTocToeGame';
import QuizForm from './QuizForm';
import CounterButton from './CounterButton';

function LeftSideTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="faq_tab">
      <Row>
        <Col sm={3}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item> 
              <Nav.Link eventKey="faq_tab">
              	FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contact_form">
             	Contact Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="todo_list">
              To Do List
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="filter_products">
              Filter Products
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="tic_toc_toe_game">
              Tic Toc Toe Game
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="quiz_form">
              Quiz Form
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="counter_timer">
              Counter & Timer
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="faq_tab">
            	<AccordionView />
            </Tab.Pane>
            <Tab.Pane eventKey="contact_form">
            	<ContactUs id="accordion-contact" leftblockvisible={false} className="py-0 px-0" classWrapper="mx-0 border-0 bg-light"/>
            </Tab.Pane>
            <Tab.Pane eventKey="todo_list">
              <ToDoList customclass="py-0 "/>
            </Tab.Pane>

            <Tab.Pane eventKey="filter_products">
              <FilterProducts />
            </Tab.Pane>

            <Tab.Pane eventKey="tic_toc_toe_game">
              <TicTocToeGame />
            </Tab.Pane>

            <Tab.Pane eventKey="quiz_form">
              <QuizForm />
            </Tab.Pane>

            <Tab.Pane eventKey="counter_timer">
              <CounterButton />
            </Tab.Pane>


          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftSideTabs;