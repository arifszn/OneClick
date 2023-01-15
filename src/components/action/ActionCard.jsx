import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';
import { TbArrowBarUp } from 'react-icons/tb';
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
    <div className="card text-center shadow-2xl compact bg-base-100 justify-between">
      <div className="flex justify-between flex-col p-4 h-full w-full">
        <div className="flex items-center flex-col gap-2">
          <figure className="pt-6 w-full h-full">{action.icon}</figure>
          <h2 className="text-sm lg:text-lg font-medium">{action.name}</h2>
          <p className="text-base-content text-opacity-70 text-sm">
            {action.description}
          </p>
        </div>
        <div className="justify-center mt-3 lg:mt-6 gap-2 flex">
          <div className="tooltip" data-tip="Open shortcut">
            <button
              className="btn btn-outline btn-circle btn-sm"
              onClick={(e) => {
                e.preventDefault();

                window.open(action.url, '_blank');
              }}
            >
              <TbArrowBarUp />
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
