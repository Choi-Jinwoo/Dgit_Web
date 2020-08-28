import React from 'react';

import { IoMdPersonAdd } from 'react-icons/io'
import Modal from 'react-modal';

import './AddUserBox.scss';
import { stores } from '../../stores';

const AddUserBox = () => {

  const [modalIsOpen, setIsOpen] = React.useState(true);

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

  const applyUser = async () => {
  }

  return (
    <div className='AddUserBox'>
      <IoMdPersonAdd className='IoMPersonAdd' color='a0a0a0' onClick={openModal} />

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
        >본인의 Github 아이디를 입력해주세요</h2>

        <div style={{
          display: 'felx',
        }}>
          <input type="text" placeholder='Github 아이디' style={{
            boxSizing: 'border-box',
            border: 'none',
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
          }} />
          <input type="text" placeholder='이름' style={{
            boxSizing: 'border-box',
            border: 'none',
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
          }} />
        </div>
        <p style={{
          fontSize: '12px',
          color: '#808080',
          margin: 0,
        }}>이름을 입력하지 않을 시 Github 이름이 적용됩니다</p>
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
        }}>
          <input type="button" value="신청" style={{
            padding: '5px 10px',
            width: '60px',
            border: '1px solid #ff6f61',
            borderRadius: '3px',
            backgroundColor: '#ff6f61',
            color: '#ffffff',
          }} onClick={applyUser} />
        </div>
      </Modal>
    </div >
  )
}

export default AddUserBox;
