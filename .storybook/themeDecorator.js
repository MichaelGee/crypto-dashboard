import * as nextImage from 'next/image'
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '../GlobalStyle'
import { theme } from '../theme';

// Replace next/image for Storybook
// Object.defineProperty(nextImage, 'default', {
//     configurable: true,
//     value: (props) => {
//       const { width, height } = props
//       const ratio = (height / width) * 100
//       return (
//         <ThemeProvider theme={theme}>
//         <div
//           style={{
//             paddingBottom: `${ratio}%`,
//             position: 'relative',
//           }}>
//           <img
//             style={{
//               objectFit: 'cover',
//               position: 'absolute',
//               width: '100%',
//               height: '100%',
//             }}
//             {...props}
//           />
//           <Global styles={globalStyle}/>
//           {storyFn()}
//         </div>
//         </ThemeProvider>
//       )
//     },
//   })


const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2.5rem 5rem'
}

  const ThemeDecorator = storyFn => (
    <ThemeProvider theme={theme}>
        <div style={style}>
          <Global styles={globalStyle}/>
          {storyFn()}
        </div>
        </ThemeProvider>
)

export default ThemeDecorator;
