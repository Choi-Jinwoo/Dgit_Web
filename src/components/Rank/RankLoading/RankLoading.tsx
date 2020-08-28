import React from 'react';
import { RiLoader2Line } from 'react-icons/ri';

import './RankLoading.scss';

const RankLoading = () => {
  return (
    <div className='rankLoading'>
      <div>
        <RiLoader2Line size='24px' />
        <p>
          <b>Github</b>과 동기화 중
        </p>
      </div>

      <span>
        약 20초 ~ 1분 소요됩니다
        </span>
    </div>
  )
}

export default RankLoading;
