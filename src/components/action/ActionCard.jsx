import PropTypes from 'prop-types';
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
    <div className="card text-center shadow-2xl compact bg-base-100 justify-between">
      <div className="flex justify-between flex-col p-4 h-full w-full">
        <div className="flex items-center flex-col gap-2">
          <figure className="pt-6 w-full h-full">{action.icon}</figure>
          <h2 className="text-sm lg:text-lg font-medium">{action.name}</h2>
          <p className="opacity-70 text-xs lg:text-sm">{action.description}</p>
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
              <svg
                className="text-base"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                ></path>
              </svg>
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
    favorite: PropTypes.bool,
  }),
  setActions: PropTypes.func.isRequired,
};

export default ActionCard;
