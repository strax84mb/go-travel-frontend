import { Link } from 'react-router-dom';
import { translate } from '../../context/translate';
import './AppLeft.css';

export const AppLeft = () => {
  return (
    <div className='AppLeft-expanded'>
      <div className="AppLeft-table">
        <div className="AppLeft-row">
          <div className="AppLeft-cell">
            <Link to="/">{ translate('PAGE_LINKS.HOME') }</Link>
          </div>
        </div>
        <div className="AppLeft-row">
          <div className="AppLeft-cell">
            <Link to="/login">{ translate('PAGE_LINKS.LOGIN') }</Link>
          </div>
        </div>
        <div className="AppLeft-row">
          <div className="AppLeft-cell">
            <Link to="/cities">{ translate('PAGE_LINKS.CITIES') }</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
