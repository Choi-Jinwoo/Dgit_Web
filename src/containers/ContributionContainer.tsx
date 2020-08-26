import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import { stores } from '../stores';
import RankUserItem from '../components/Rank/RankUserItem/RankUserItem';
import RankUser from '../components/Rank/RankUser';

const ContributionContainer = observer(() => {
  const { getTotalRank, totalRank } = stores.contributionStore;
  const { getTotalTopStreak, totalTopStreak } = stores.totalTopStore;

  const handleStoreMethod = useCallback(async () => {
    try {
      await getTotalRank();
      await getTotalTopStreak();
    } catch (err) { }
  }, [getTotalRank, getTotalTopStreak]);

  const rankUserItems: JSX.Element[] = totalRank.map((user, rank) => {
    return rank === 0 ?
      <RankUserItem rank={rank + 1} streak={totalTopStreak} user={user} /> :
      <RankUserItem rank={rank + 1} user={user} />
  });

  useEffect(() => {
    handleStoreMethod()
  }, [handleStoreMethod]);

  return (
    <RankUser rankUserItems={rankUserItems} />
  );
});

export default ContributionContainer;
