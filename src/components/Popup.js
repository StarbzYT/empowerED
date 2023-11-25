import { useState } from 'react';
import { Button, Modal, Label } from 'semantic-ui-react';

function Popup() {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size="large"
    >
      <Modal.Header>Welcome to EmpowerED!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            EmpowerED is a safe space for you to share any mental health
            struggles you are having at school. Anything you share will be
            anonymous and our personalized AI will respond to you.{' '}
          </p>
          <p>
            EmpowerED was created by Adarsh Chhokar who is an SFU student with
            past mental health struggles and his mission was to offer
            personalized solutions to reform the educational structure and its
            current impact on mental health.
          </p>
          <p>
            <Label color="red">
              Our AI should not be taken as a professional health expert!
            </Label>{' '}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={() => setOpen(false)}>
          Got it!
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default Popup;
