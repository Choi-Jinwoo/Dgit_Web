import React, { useEffect } from 'react';

import { observer } from 'mobx-react';
import { stores } from '../stores';
import { useCallback } from 'react';
import HistoryUser from '../components/History/HistoryUser';
import HistoryUserItem from '../components/History/HistoryUserItem/HistoryUserItem';
import RankLoading from '../components/Rank/RankLoading/RankLoading';

const WeekRankHistoryContainer = observer(() => {
  const { getWeekTopHistory, weekTopHistory } = stores.weekTopStore;

  const handleStoreMethod = useCallback(async () => {
    try {
      await getWeekTopHistory();
    } catch (err) { }
  }, [getWeekTopHistory])

  const historyUserItem: JSX.Element[] = weekTopHistory.map((weekTopUser) => {
    return <HistoryUserItem weekTop={weekTopUser} />
  })

  useEffect(() => {
    handleStoreMethod()
  }, [handleStoreMethod]);

  return (
    historyUserItem.length === 0 ?
      <RankLoading /> :
      <div>
        <HistoryUser historyUserItems={historyUserItem} />
      </div>
  );
})

export default WeekRankHistoryContainer;