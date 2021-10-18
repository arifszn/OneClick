import Navbar from './Navbar';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
    return (
        <div className="fade-in">
            <Navbar/>
            <div id="home">
                <div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-accent to-secondary text-primary-content">
                    <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
                        <h1 className="py-4 mb-2 text-center font-title lg:py-0">
                            <div className="mb-2 text-3xl lg:text-5xl font-extrabold">
                                Create New
                            </div>
                            <h1 className="py-2 text-2xl font-bold">
                                Less clicking, more creating
                            </h1>
                            <p className="text-sm text-opacity-70 text-base-200">
                                Shortcuts to your favorite actions on the websites you love.
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="pt-10 pb-20 hero bg-gradient-to-br from-base-100 to-base-300 text-base-content">
                        {children}
                    </div>
                </div>
            </div>
            <footer className="p-4 border-t footer bg-base-200 border-base-300 text-base-content footer-center">
                <div>
                    <p className="font-mono text-sm">Made with ❤️ by <a className="text-primary" href="https://github.com/arifszn" target="_blank" rel="noreferrer">Ariful Alam</a></p>
                </div>
            </footer>
        </div>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node,
}

export default BaseLayout;