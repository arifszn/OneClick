import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import config from '../../../config';
import { RiPaintFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { theme_key } from '../../helpers/utils';

const ThemeChanger = ({ buttonClass = '', dropdownEnd = true }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const changeTheme = (e, selectedTheme) => {
    e.preventDefault();
    document.querySelector('html').setAttribute('data-theme', selectedTheme);
    localStorage.setItem(theme_key, selectedTheme);

    setTheme(selectedTheme);
  };

  return (
    <div
      title="Change Theme"
      className={`dropdown ${dropdownEnd ? 'dropdown-end' : ''}`}
    >
      <div tabIndex={0} className={`btn btn-ghost normal-case ${buttonClass}`}>
        <RiPaintFill className="inline-block w-5 h-5 stroke-current" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1792 1792"
          className="inline-block w-4 h-4 ml-1 fill-current"
        >
          <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
        </svg>
      </div>
      <div
        tabIndex={0}
        className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-100 text-base-content"
      >
        <ul className="p-4 menu compact">
          {config.themeConfig.themes.map((item, index) => (
            <li key={index}>
              {/* eslint-disable-next-line */}
              <a
                onClick={(e) => changeTheme(e, item)}
                className={`${theme === item ? 'active' : ''}`}
              >
                <span className="opacity-70 capitalize">
                  {index === 0 ? 'Default' : item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ThemeChanger.propTypes = {
  buttonClass: PropTypes.string,
  dropdownEnd: PropTypes.bool,
};

export default ThemeChanger;
