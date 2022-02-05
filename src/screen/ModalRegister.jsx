import React from 'react';

const ModalRegister = ({showModalRegister, setShowModalRegister}) => {
  return <div>
      {showModalRegister ? <div className='bg-form'>
          <div>
              <h4 className='modal-center'>Register</h4>
          </div>
      </div> : null}
  </div>;
};

export default ModalRegister;
