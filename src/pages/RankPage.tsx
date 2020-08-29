import React from 'react';
import ContributionContainer from '../containers/ContributionContainer';
import Title from '../components/Title/Title';
import AddUserBox from '../components/AddUserBox/AddUserBox';
import InfoBox from '../components/InfoBox/InfoBox';

import './RankPage.scss'
import { RankType } from '../enum/RankType';

const RankPage = () => {
  const [rankType, setRankType] = React.useState(RankType.TOTAL);

  return (
    <div className='RankPage'>
      <Title />
      <div className='contributionContainer'>
        <div className='utilBox'>
          <div>
            <button onClick={(e) => setRankType(RankType.TOTAL)} style={rankType === RankType.TOTAL ? {
              backgroundColor: '#ff6f61'
            } : {}}>종합</button>
            <button onClick={(e) => setRankType(RankType.WEEK)} style={rankType === RankType.WEEK ? {
              backgroundColor: '#ff6f61'
            } : {}}>주간</button>
          </div>
          <div>
            <AddUserBox />
            <InfoBox />
          </div>
        </div>
        <ContributionContainer rankType={rankType} />
      </div>
    </div>
  );
}

export default RankPage;
