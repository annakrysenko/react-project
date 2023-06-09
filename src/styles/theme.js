const theme = {
  colors: {
    white: '#ffffff',
    mainBackground: '#f6f7fb',
    inputBackground: '#f5f7fa',
    btnBackground: '#6D7A8D',
    mainFontColor: '#242a37',
    secondaryFontColor: '#898f9f',
    googleFontColor: '#707375',
    placeholderFontColor: '#a6abb9',
    accentColor: '#ff6b08',
    headerBackground: '#b1b5c2',
    hover: '#DC5309',
    timer: '#091E3F',
    modalBackground: 'rgba(43, 43, 43, 0.1)',
    borderColor: '#E0E5EB',
    overlay: '#091e3fcc',
  },
  shadows: {
    input: 'inset 0px 1px 2px rgba(29, 29, 27, 0.15)',
    header: '0px 2px 3px  rgba(9, 30, 63, 0.1)',
    google: '0px 2px 2px rgba(9, 30, 63, 0.15)',
    hero: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    modal: '10px 10px 20px rgba(9, 30, 63, 0.2)',
    instrustion: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    myGoals: '4px 4px 8px rgba(36, 42, 55, 0.15)',
  },
  transition: {
    transitionFunction: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default theme;

// ПРИКЛАД ВИКОРИСТАННЯ
// color: ${({ theme }) => theme.colors.white};

// або ось так
// color: ${theme.colors.white};
