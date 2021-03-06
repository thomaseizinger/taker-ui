import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Store from 'electron-store';
import { Store as ReduxStore } from 'redux';
import AppRegionDrag from './components/AppRegionDrag';
import customTheme from './theme';
import Layout from './pages/Layout';
import { BitcoinWalletProvider } from './hooks/useBitcoinWallet';
import { EthereumWalletProvider } from './hooks/useEthereumWallet';
import { CndProvider } from './hooks/useCnd';

type Props = {
  store: ReduxStore;
  history: History;
  settings: Store;
};

const App = ({ store, history, settings }: Props) => {
  return (
    <CndProvider settings={settings}>
      <BitcoinWalletProvider settings={settings}>
        <EthereumWalletProvider settings={settings}>
          <ThemeProvider theme={customTheme}>
            <CSSReset />
            <Provider store={store}>
              <ConnectedRouter history={history}>
                {process.platform === 'darwin' ? <AppRegionDrag /> : null}
                <Layout />
              </ConnectedRouter>
            </Provider>
          </ThemeProvider>
        </EthereumWalletProvider>
      </BitcoinWalletProvider>
    </CndProvider>
  );
};

export default hot(App);
