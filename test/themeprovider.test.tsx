import * as ReactDOM from 'react-dom';
import { Default as ThemeProvider } from '../stories/ThemeProvider.stories';

describe('ThemeProvider', () => {
  const theme = {
    palette: {
      primary: {
        main: '#50B95D',
        dark: '#21822D',
      },
      paleBlue: '#647A8B',
      darkGrey: '#4B5B69',
      greenLight: '#F1F9F2',
      lightGrey: '#DFE3E6',
      required: {
        main: '#CA0202',
        light: '#CA020233',
      },
      primaryBlack: '#2F3B46',
      yellow: {
        main: ' #FFC82B',
        light: 'rgba(255, 200, 43, 0.2)',
      },
    },
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider theme={theme} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
