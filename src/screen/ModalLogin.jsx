import React from 'react';

const ModalLogin = ({showModalLogin, setShowModalLogin}) => {
  return <div>
      {showModalLogin ? <div className='bg-form'>
          <div>
              <h4 className='modal-center'>Login</h4>
          </div>
      </div> : null}
  </div>;
};

export default ModalLogin;
