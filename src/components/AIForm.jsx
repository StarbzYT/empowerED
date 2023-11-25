import {
  Segment,
  Form,
  TextArea,
  Button,
  Header,
  Loader,
} from 'semantic-ui-react';
import Error from './Error';
import { useState } from 'react';
import getResponse from '../api/getResponse';
import Logo from './Logo';

function AIForm() {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [AIresponse, setAIResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userInput.length < 100 || userInput.length >= 530) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    const response = await getResponse(userInput);
    setAIResponse(response);
    setLoading(false);
  };

  return (
    <div>
      {error && <Error length={userInput.length} />}
      <Segment
        style={{
          height: '44em',
          width: '57em',
          padding: '4em',
          margin: 'auto',
        }}
      >
        <Logo src="empowered_logo.png" />
        {loading ? (
          <Loader active inline="centered" />
        ) : AIresponse ? (
          <Header
            size="small"
            style={{
              fontWeight: 'normal',
              fontSize: '1.5em',
            }}
          >
            {AIresponse}
          </Header>
        ) : (
          <Form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            <Form.Field
              style={{
                height: '12em',
                width: '100%',
                minWidth: '100%',
                maxWidth: '90vw',
                resize: 'none',
                fontSize: '1.5em',
              }}
              id="form-textarea-control-opinion"
              control={TextArea}
              placeholder="What's been bothering you at school and how did it make you feel?"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Form.Field
              id="form-button-control-public"
              control={Button}
              content="Submit"
              style={{ width: '100%', marginTop: '1em' }}
            />
          </Form>
        )}
      </Segment>
    </div>
  );
}

export default AIForm;
