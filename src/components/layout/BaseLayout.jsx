import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { FaChrome, FaFirefox } from 'react-icons/fa';
import config from '../../../config';

const BaseLayout = (props) => {
  return (
    <div className="fade-in">
      <Navbar query={props.query} setQuery={props.setQuery} />
      <div id="home">
        {!config.extension && (
          <div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br to-primary from-secondary text-primary-content">
            <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-36 hero-content">
              <div className="p-4 mb-2 text-center font-title lg:py-0">
                <div className="mb-2 text-3xl lg:text-5xl font-light">
                  <span className="capitalize">Awesome</span>{' '}
                  <span className="capitalize">Shortcuts</span>
                </div>
                <h1 className="py-2 text-xl lg:text-2xl font-bold">
                  Less clicking, more creating
                </h1>
                <p className="text-sm text-opacity-70 opacity-60">
                  Navigate to your favorite actions on the websites you love
                  with just one click.
                </p>
              </div>
              <div className="flex flex-col">
                <a
                  className="btn glass mb-3 text-primary-content"
                  href="https://chrome.google.com/webstore/detail/awesome-shortcuts/laonciagkijmeofonnbjlifmjingahok"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="pr-3 tracking-widest normal-case">
                    Get it for Chrome
                  </span>{' '}
                  <FaChrome />
                </a>
                <a
                  className="btn glass text-primary-content"
                  href="https://addons.mozilla.org/en-US/firefox/addon/awesome-shortcuts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="pr-3 tracking-widest normal-case">
                    Get it for Firefox
                  </span>{' '}
                  <FaFirefox />
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="relative z-10">
          <div
            className={`hero bg-gradient-to-br from-base-100 to-base-300 text-base-content ${
              config.extension ? 'pt-14' : 'pt-10'
            }`}
          >
            {props.children}
          </div>
        </div>
      </div>
      {!config.extension && (
        <footer className="p-4 footer bg-base-300 text-base-content footer-center">
          <div>
            <p className="font-mono text-sm">
              Made with ❤️ by{' '}
              <a
                className="text-base-content"
                href="https://github.com/arifszn"
                target="_blank"
                rel="noreferrer"
              >
                Ariful Alam
              </a>
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default BaseLayout;
