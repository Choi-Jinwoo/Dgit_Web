import React from 'react';
import ContributionContainer from '../containers/ContributionContainer';
import Title from '../components/Title/Title';
import AddUserBox from '../components/AddUserBox/AddUserBox';
import InfoBox from '../components/InfoBox/InfoBox';

import './RankPage.scss'

const RankPage = () => {
  return (
    <div className='RankPage'>
      <Title />
      <div className='contributionContainer'>
        <div className='utilBox'>
          <AddUserBox />
          <InfoBox />
        </div>
        <ContributionContainer />
      </div>
    </div>
  );
}

export default RankPage;
