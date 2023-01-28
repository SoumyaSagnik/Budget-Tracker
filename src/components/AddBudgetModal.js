import { Form, Modal, Button, Stack } from "react-bootstrap";
import { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContexts";

const AddBudgetModal = ({ show, handleClose }) => {
  const nameRef = useRef();
  const budgetRef = useRef();
  const { addBudget } = useBudgets();
  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      budget: parseFloat(budgetRef.current.value),
    });
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="budget">
            <Form.Label>Budget</Form.Label>
            <Form.Control
              ref={budgetRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Stack direction="horizontal">
            <Button variant="primary" type="submit" className="ms-auto">
              Add
            </Button>
          </Stack>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddBudgetModal;
