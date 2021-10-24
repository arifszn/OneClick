import Navbar from './Navbar';
import PropTypes from 'prop-types';

const BaseLayout = (props) => {
    return (
        <div className="fade-in">
            <Navbar query={props.query} setQuery={props.setQuery}/>
            <div id="home">
                <div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br to-primary from-secondary text-primary-content">
                    <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
                        <div className="py-4 mb-2 text-center font-title lg:py-0">
                            <div className="mb-2 text-3xl lg:text-5xl font-light">
                                <span className="capitalize">Dot</span>{' '}<span className="text-neutral capitalize">New</span>
                            </div>
                            <h1 className="py-2 text-2xl font-bold">
                                Less clicking, more creating
                            </h1>
                            <p className="text-sm text-opacity-70 opacity-60">
                                Shortcuts to your favorite actions on the websites you love.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="pt-10 hero bg-gradient-to-br from-base-100 to-base-300 text-base-content">
                        {props.children}
                    </div>
                </div>
            </div>
            <footer className="p-4 footer bg-base-300 text-base-content footer-center">
                <div>
                    <p className="font-mono text-sm">Made with ❤️ by <a className="text-primary-focus" href="https://github.com/arifszn" target="_blank" rel="noreferrer">Ariful Alam</a></p>
                </div>
            </footer>
        </div>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node,
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
}

export default BaseLayout;