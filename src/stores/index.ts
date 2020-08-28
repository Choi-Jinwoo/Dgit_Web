import React from 'react';
import ContributionStore from './contribution/ContributionStore';
import TotalTopStore from './totalTop/TotalTopStore';
import UserStore from './user/UserStore';

export const stores = {
  contributionStore: new ContributionStore(),
  totalTopStore: new TotalTopStore(),
  userStore: new UserStore(),
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