import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    src: url('/fonts/BebasNeue-Regular.ttf') format('ttf');
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('ttf'),
        url('/fonts/Roboto-Regular.woff2') format('woff2'),
        url('/fonts/Roboto-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'RobotoBold';
    src: url('/fonts/Roboto-Bold.ttf') format('ttf'),
        url('/fonts/Roboto-Bold.woff2') format('woff2'),
        url('/fonts/Roboto-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .gigster {
    padding: 30px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
	  margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  font: inherit;
	  vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
	  display: block;
	}
	body {
	  line-height: 1;
	  font-family: ${props => props.theme.fonts.roboto};
	  margin: 0;
	}
	ol, ul {
	  list-style: none;
	}
	blockquote, q {
	  quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
	  content: '';
	  content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

  body, html {
	  min-height: 100vh;
	  overflow: ${({ scroll }) => (scroll ? 'scroll' : 'hidden')};
  }
`
