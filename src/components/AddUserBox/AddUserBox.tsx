import React from 'react';

import { IoMdPersonAdd } from 'react-icons/io'
import Modal from 'react-modal';

import './AddUserBox.scss';
import { stores } from '../../stores';
import { IApplyUser } from '../../types/user';

const AddUserBox = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [userID, setUserID] = React.useState('');
  const [applyButtonDisable, setApplyButtonDisable] = React.useState(false);

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
    setApplyButtonDisable(true);
    const user: IApplyUser = {
      name,
      userID,
    }

    try {
      await stores.userStore.applyUser(user);
      alert('신청이 완료되었습니다. 승인후 적용됩니다');
      closeModal();
    } catch (err) {
      if (err.response) {
        const { status } = err.response;

        if (status === 400) {
          alert('아이디를 입력해주세요');
        } else if (status === 404) {
          alert('존재하지 않는 Github 아이디입니다');
        } else if (status === 409) {
          alert('이미 가입된 아이디입니다');
        } else if (status === 500) {
          alert('서버 오류가 발생하였습니다');
        }
      }
    }
    setApplyButtonDisable(false);
    setName('');
    setUserID('');
  }

  return (
    <div className='AddUserBox'>
      <IoMdPersonAdd className='IoMPersonAdd' color='a0a0a0' size='22px' onClick={openModal} />

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
          <input type="text" placeholder='Github 아이디 (example-user)'
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            style={{
              boxSizing: 'border-box',
              border: 'none',
              padding: '10px',
              width: '100%',
              marginBottom: '10px',
            }} />
          <input type="text" placeholder='이름'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
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
            backgroundColor: applyButtonDisable ? '#e2e2e2' : '#ff6f61',
            color: '#ffffff',
          }} onClick={applyUser} disabled={applyButtonDisable} />
        </div>
      </Modal>
    </div >
  )
}

export default AddUserBox;
