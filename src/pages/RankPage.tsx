import React from 'react';
import ContributionContainer from '../containers/ContributionContainer';

import './RankPage.scss'
import Title from '../components/Title/Title';

const RankPage = () => {
  return (
    <>
      <Title />
      <div className='contributionContainer'>
        <ContributionContainer />
      </div>
    </>
  );
}

export default RankPage;
