import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import { stores } from '../stores';
import RankUserItem from '../components/Rank/RankUserItem/RankUserItem';
import RankUser from '../components/Rank/RankUser';

const ContributionContainer = observer(() => {
  const { getTotalRank, totalRank } = stores.contributionStore;

  const handleGetTotalRank = useCallback(async () => {
    try {
      await getTotalRank();
    } catch (error) {
      return error;
    }
  }, [getTotalRank]);

  const rankUserItems: JSX.Element[] = totalRank.map((user, rank) => {
    return (
      <RankUserItem rank={rank + 1} user={user} />
    )
  })

  useEffect(() => {
    handleGetTotalRank()
  }, [handleGetTotalRank]);

  return (
    <RankUser rankUserItems={rankUserItems} />
  );
});

export default ContributionContainer;
