import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import store from '../store';
import { Provider } from 'react-redux';
import { initGA,logPageView } from '../utils/reactGa'
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../utils/getPageContext';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
   
  }
  componentDidMount() {
    initGA();
    logPageView();
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <title>Kan Profile</title>
          <meta
            name="google-site-verification"
            
            content="7pNd-ymISffEbRjUbyQoxUrms4m94tJOONOnlpWhvto"
          />
          
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>

        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider theme={theme}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}
export default MyApp;
