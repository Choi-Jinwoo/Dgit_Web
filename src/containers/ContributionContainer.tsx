import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import { stores } from '../stores';
import RankUserItem from '../components/Rank/RankUserItem/RankUserItem';
import RankUser from '../components/Rank/RankUser';
import RankLoading from '../components/Rank/RankLoading/RankLoading';
import { RankType } from '../enum/RankType';

const ContributionContainer = observer((props: { rankType: RankType }) => {
  const { getTotalRank, getWeekRank, userRank } = stores.contributionStore;
  const { getTotalTopStreak, totalTopStreak } = stores.totalTopStore;

  const handleStoreMethod = useCallback(async () => {
    try {
      if (props.rankType === RankType.WEEK) {
        await getWeekRank();
      } else if (props.rankType === RankType.TOTAL) {
        await getTotalRank();
        await getTotalTopStreak();
      }
    } catch (err) { }
  }, [props.rankType, getWeekRank, getTotalRank, getTotalTopStreak]);

  const rankUserItems: JSX.Element[] = userRank.map((user, rank) => {
    return rank === 0 ?
      <RankUserItem rank={rank + 1} rankType={props.rankType} streak={totalTopStreak} user={user} /> :
      <RankUserItem rank={rank + 1} rankType={props.rankType} user={user} />
  });

  useEffect(() => {
    handleStoreMethod()
  }, [handleStoreMethod]);

  return (
    rankUserItems.length === 0 ?
      <RankLoading /> :
      <div>
        <RankUser rankUserItems={rankUserItems} />
      </div>
  );
});

export default ContributionContainer;
