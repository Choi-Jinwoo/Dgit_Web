import React from 'react';
import ContributionStore from './contribution/ContributionStore';

export const stores = {
  contributionStore: new ContributionStore(),
}

export const storesContext = React.createContext({
  ...stores,
})

export const useStores = () => {
  const store = React.useContext(storesContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
}