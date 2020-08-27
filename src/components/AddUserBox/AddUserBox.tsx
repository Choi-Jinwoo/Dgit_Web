import React from 'react';

import { IoMdPersonAdd } from 'react-icons/io'
import Modal from 'react-modal';

import './AddUserBox.scss';

const AddUserBox = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='AddUserBox'>
      <IoMdPersonAdd color='a0a0a0' />
      <Modal
        isOpen={modalIsOpen}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h3>회원 추가</h3>
        <p>본인의 Github 아이디를 입력해주세요</p>

        <input type="text" placeholder='Github 아이디' />
        <button>확인</button>
        <button>취소</button>
      </Modal>
    </div >
  )
}

export default AddUserBox;
