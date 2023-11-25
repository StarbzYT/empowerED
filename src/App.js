import { Grid } from 'semantic-ui-react';
import AIForm from './components/AIForm';
import Popup from './components/Popup';

function App() {
  return (
    <Grid
      centered
      columns={1}
      style={{ height: '100vh', width: '100vw', margin: 'auto' }}
      verticalAlign="middle"
    >
      <Grid.Column>
        <Popup />
        <AIForm />
      </Grid.Column>
    </Grid>
  );
}

export default App;
