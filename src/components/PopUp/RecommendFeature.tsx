import React from 'react';
import Modal from 'react-modal';

import './RecommendFeature.scss';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfthHQuKdeqes3aP23XsHeW-fUNOw9OS32owYbiNbJyJFkJUg/viewform?usp=sf_link';

const RecommendFeature = () => {
  const defaultOpenModal = !(localStorage.getItem('close-pop-up') === 'true');
  const [modalIsOpen, setIsOpen] = React.useState(defaultOpenModal);

  const closeModal = () => {
    setIsOpen(false);
  }

  const customStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.4)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '3px',
      padding: '60px 80px'
    },
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className='RecommendFeature'>
        <h1>DGIT의 기능을 추천해주세요</h1>
        <p>기능을 추천하거나 수정할 부분을 알려주세요</p>
        <p>개발자에게 전달되어 적극반영됩니다</p>

        <div className='RecommendFeature-Buttons'>
          <div className='RecommendFeature-Buttons-Survey'
            onClick={() => window.open(FORM_URL, '_blank')}
          >설문하러 가기</div>
        </div>

        <div className='RecommendFeature-Buttons-Close'
          onClick={() => {
            localStorage.setItem('close-pop-up', 'true');
            setIsOpen(false);
          }}>
          다시는 보지 않기(다시 생각해봐요)
          </div>
      </div>
    </Modal >
  )
}

export default RecommendFeature;