import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormApp = () => {
    return(
        <Form>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><strong>Name:</strong></Form.Label>
        <Form.Control className='input' type="text" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label><strong>Age:</strong></Form.Label>
        <Form.Control className='input' type="number" placeholder="Age" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Email address:</strong></Form.Label>
        <Form.Control className='input' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Password:</strong></Form.Label>
        <Form.Control className='input' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        <strong>Submit</strong>
        </Button>

    </Form>
    );
}

export default FormApp;