import { Message } from 'semantic-ui-react';

function Error({ length }) {
  return (
    <div
      style={{
        maxWidth: '57em',
        minWidth: '57em',
        margin: 'auto',
        marginBottom: '1em',
      }}
    >
      {length < 100 ? (
        <Message negative>
          <Message.Header>Oops, something's wrong...</Message.Header>
          <p>Don't be shy! Tell me more about your experience.</p>
        </Message>
      ) : length >= 500 ? (
        <Message negative>
          <Message.Header>Oops, something's wrong...</Message.Header>
          <p>
            Woah! That's a lot of text. Try to keep it under 500 characters.
          </p>
        </Message>
      ) : (
        <Message positive>
          <Message.Header>You got it!</Message.Header>
          <p>
            When you're ready, click the button below to submit your response.
          </p>
        </Message>
      )}
    </div>
  );
}

export default Error;
