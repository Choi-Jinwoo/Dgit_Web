import React from 'react';

import { AiFillInfoCircle } from 'react-icons/ai';
import Modal from 'react-modal';

import './InfoBox.scss';

const InfoBox = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

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
    <div className='InfoBox'>
      <AiFillInfoCircle className='AiFillInfoCircle' color='#4286f4' size='22px' onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 style={{
          fontSize: '16px',
          marginBottom: '30px',
          color: '#ff6f61',
        }}
        >안내사항</h2>

        <ol style={{
          fontSize: '14px',
          color: '#808080',
        }}>
          <li style={{
            padding: '10px',
          }}>대구소프트웨어고등학교 재학생 혹은 졸업생 대상입니다</li>
          <li style={{
            padding: '10px',
          }}>사용자가 본인의 ID를 등록하면 승인 후 표시합니다</li>
          <li style={{
            padding: '10px',
          }}>정확한 정보를 위해 신청시 이름을 입력해주세요</li>
          <li style={{
            padding: '10px',
          }}>비공개 저장소를 기여도로 표시하면 모든 기여도를 확인할 수 있습니다(Github설정)</li>
          <li style={{
            padding: '10px',
          }}>하루 2회 동기화 됩니다(00:00, 12:00)</li>
          <li style={{
            padding: '10px',
          }}>주간 기여도는 일요일 ~ 토요일의 기여도입니다</li>
          <li style={{
            padding: '10px',
          }}>사용자 정보 수정 및 삭제는 <a href="https://github.com/Choi-Jinwoo">제작자</a>로 요청해주세요</li>
          <li style={{
            padding: '10px',
          }}>자세한 사항은 <a href="https://github.com/Choi-Jinwoo/Dgit_Web/blob/master/README.md">이곳</a>을 참고해주세요</li>
        </ol>
      </Modal>
    </div>
  )
}

export default InfoBox;
