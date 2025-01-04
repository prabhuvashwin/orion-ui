import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Orion UI</h1>
    </ThemeProvider>
  );
}

export default App
