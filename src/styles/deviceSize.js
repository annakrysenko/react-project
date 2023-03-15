const device = {
  mobile: `(min-width: 320px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1280p)`,
};

const screenSize = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};
export default device;
export { screenSize };
// ПРИКЛАД ВИКОРИСТАННЯ

// @media ${device.desktop} {
//     display: flex;
//     justify-content: center;
//   } ;
