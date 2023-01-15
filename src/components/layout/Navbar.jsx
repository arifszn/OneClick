import { useEffect, useContext } from 'react';
import { navigateToPath } from '../../helpers/utils';
import { ThemeContext } from '../../contexts/ThemeContext';
import config from '../../../config';
import { RiPaintFill } from 'react-icons/ri';

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const changeTheme = (e, selectedTheme) => {
    e.preventDefault();
    document.querySelector('html').setAttribute('data-theme', selectedTheme);
    localStorage.setItem('awesome-shortcuts-theme', selectedTheme);

    setTheme(selectedTheme);
  };

  return (
    <div
      className={`inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b border-transparent bg-transparent absolute ${
        config.extension
          ? 'border-base-200 bg-base-200 text-base-content'
          : 'text-primary-content'
      }`}
    >
      <div className="mx-auto space-x-1 navbar max-w-none text-base-content">
        <div
          className={`${
            config.extension ? 'flex items-center flex-none' : `hidden`
          }`}
        >
          {/* eslint-disable-next-line */}
          <a
            aria-label="Home"
            className="px-2 flex-0 md:px-4 link"
            onClick={(e) => {
              e.preventDefault();
              navigateToPath('home');
            }}
          >
            <div className="inline-block text-2xl">
              <span className="text-primary capitalize">Awesome</span>{' '}
              <span className="text-base-content capitalize">Shortcuts</span>
            </div>
          </a>
        </div>
        <div className="flex-1" />
        <div title="Change Theme" className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost normal-case">
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
            className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"
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
        {!config.extension && (
          <div title="Github" className="items-center flex-none">
            <a
              aria-label="Github"
              target="_blank"
              href="https://github.com/arifszn/awesome-shortcuts"
              rel="noreferrer"
              className="normal-case btn btn-ghost drawer-button btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="inline-block w-6 h-6 fill-current"
              >
                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
