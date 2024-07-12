import { translate } from '../context/translate';
import { login } from '../repositories/user_repository';
import { setJwt } from '../context/storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

export const Login = () => {
  let [ pending, setPending ] = useState(false); 
  let [ errorMessage, setErrorMessage ] = useState(null);
  const navigate = useNavigate();

  const doLogin = () => {
    const username = document.getElementById('LoginPageUsername').value;
    const password = document.getElementById('LoginPagePassword').value;
    setPending(true);
    login({
      username: username,
      password: password,
    }).then(resp => {
      setJwt(resp.data.token);
      setErrorMessage(null);
      navigate('/');
    }).catch(err => {
      if (err.error === 'UNAUTHORIZED') {
        setErrorMessage('ERRORS.' + err.textCode);
      } else {
        setErrorMessage('ERRORS.BE_ERROR');
      }
    }).finally(() => {
      setPending(false);
    });
  };
  
  return (
    <div className="Login-wrap">
      <form className='Login-form'>
        <div className="Login-table">
          <div className="Login-table-row">
            <div className="Login-table-cell">
              <div className="Login-left-cell-content">
                <label htmlFor="LoginPageUsername"><b>{ translate('PAGES.LOGIN.USERNAME') }:</b></label>
              </div>
            </div>
            <div className="Login-table-cell">
              <div className="Login-cell-content">
                <input className="Login-input" type="text" name="LoginPageUsername" id="LoginPageUsername" />
              </div>
            </div>
          </div>
          <div className="Login-table-row">
            <div className="Login-table-cell">
              <div className="Login-left-cell-content">
                <label htmlFor="LoginPagePassword"><b>{ translate('PAGES.LOGIN.PASSWORD') }:</b></label>
              </div>
            </div>
            <div className="Login-table-cell">
              <div className="Login-cell-content">
                <input className="Login-input" type="password" name="LoginPagePassword" id="LoginPagePassword" />
              </div>
            </div>
          </div>
        </div>
        {
          errorMessage ?
          <div className="Login-error-text">
            <span>{ translate(errorMessage) }</span>
          </div>
          : <></>
        }
        <button 
          className='Login-button'
          type="submit"
          disabled={ pending }
          onClick={ doLogin }
          >
            <b>{ translate('PAGES.LOGIN.LOGIN') }</b>
        </button>
      </form>
    </div>
  );
}
