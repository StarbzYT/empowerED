async function getResponse(message) {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/completion`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    }
  );

  const json = await response.json();
  return json.message.content;
}

export default getResponse;
