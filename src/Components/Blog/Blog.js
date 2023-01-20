import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

function Blog() {
    return (
        <Accordion className=' container my-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the Purpose of React Router?</Accordion.Header>
                <Accordion.Body>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works.
                    <br /> <br /> The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.

                    Setting up the React Application: Create a React application using create-react-app and lets call it geeks.

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How Does Context Api Works?</Accordion.Header>
                <Accordion.Body>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> <br />

                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. <br /><br /> Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Write about useRef Hook.</Accordion.Header>
                <Accordion.Body>
                    The <b> useRef</b> Hook allows you to persist values between renders. <br />
                    It can be used to store a mutable value that does not cause a re-render when updated.<br />
                    It can be used to access a DOM element directly.<br />
                    Does Not Cause Re-renders <br />
                    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.<br />
                    To avoid this, we can use the <b> useRef </b> Hook.<br />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Blog;