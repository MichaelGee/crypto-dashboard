import { addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

addDecorator(themeDecorator);

// export const parameters = {
//   layout: 'fullscreen',
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   viewport: {
//     viewports: {
//       mobile: {
//         name: 'iPhone X',
//         styles: {
//           width: '375px',
//           height: '812px',
//         },
//       },
//       tablet: {
//         name: 'iPad',
//         styles: {
//           width: '768px',
//           height: '1024px',
//         },
//       },
//       laptop: {
//         name: 'Laptop',
//         styles: {
//           width: '1024px',
//           height: '768px',
//         },
//       },
//       desktop: {
//         name: 'Desktop',
//         styles: {
//           width: '1440px',
//           height: '1024px',
//         },
//       },
//     },
//   },
// }

