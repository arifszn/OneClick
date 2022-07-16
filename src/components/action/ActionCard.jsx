const ActionCard = ({ action }) => {
  return (
    <div className="card text-center shadow-2xl compact bg-base-100">
      <figure className="pt-6 lg:pt-10">{action.icon}</figure>
      <div className="card-body md:mx-2 flex flex-col h-full justify-between">
        <h2 className="text-sm lg:text-lg font-medium">{action.name}</h2>
        <p className="opacity-80 text-2xs lg:text-sm">{action.description}</p>
        <div className="justify-center mt-3 lg:mt-6">
          <button
            className="btn btn-outline btn-circle btn-sm lg:btn-md"
            onClick={(e) => {
              e.preventDefault();

              window.open(action.url, '_blank');
            }}
          >
            <svg
              className="p-2 lg:p-3"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 12 16"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
