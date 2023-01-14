import PropTypes from 'prop-types';
import { RxEnter } from 'react-icons/rx';
import { FaRegHeart } from 'react-icons/fa';
import { favorite_actions_key } from '../../helpers/utils';

const ActionCard = ({ action, setActions }) => {
  const toggleFavorite = (key) => {
    setActions((prevActions) => {
      const clonedActions = [...prevActions];
      const index = clonedActions.findIndex((action) => action.key === key);
      clonedActions[index] = {
        ...clonedActions[index],
        favorite: !clonedActions[index].favorite,
      };

      localStorage.setItem(
        favorite_actions_key,
        JSON.stringify(
          clonedActions
            .filter((action) => action.favorite)
            .map((action) => action.key)
        )
      );

      return clonedActions;
    });
  };

  return (
    <div className="card text-center shadow-2xl compact bg-base-100">
      <figure className="pt-6 lg:pt-10 w-full h-full">{action.icon}</figure>
      <div className="card-body md:mx-2 flex flex-col h-full justify-between">
        <h2 className="text-sm lg:text-lg font-medium">{action.name}</h2>
        <p className="opacity-80 text-2xs lg:text-sm">{action.description}</p>
        <div className="justify-center mt-3 lg:mt-6 gap-2 flex">
          <div className="tooltip" data-tip="Open shortcut">
            <button
              className="btn btn-outline btn-circle btn-sm"
              onClick={(e) => {
                e.preventDefault();

                window.open(action.url, '_blank');
              }}
            >
              <RxEnter />
            </button>
          </div>
          <div
            className="tooltip"
            data-tip={`${action.favorite ? 'Remove from' : 'Add to'} Favorites`}
          >
            <button
              className={`btn ${
                action.favorite ? 'btn-primary' : 'btn-outline'
              } btn-circle btn-sm`}
              onClick={(e) => {
                e.preventDefault();

                toggleFavorite(action.key);
              }}
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ActionCard.propTypes = {
  action: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }),
  setActions: PropTypes.func.isRequired,
};

export default ActionCard;
