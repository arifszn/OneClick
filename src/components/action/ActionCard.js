import { misc } from "../../config";

const ActionCard = ({ action }) => {
    return (
        <div class="card text-center shadow-2xl compact bg-base-100" data-aos={misc.animationName}>
            <figure class="px-10 pt-10">
                {action.icon}
            </figure>
            <div class="card-body md:mx-2 flex flex-col h-full justify-between">
                <h2 class="card-title">{action.name}</h2>
                <p>{action.description}</p>
                <div class="justify-center card-actions">
                    <button 
                        class="btn btn-outline btn-circle"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(action.url, '_blank');
                        }}
                    >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ActionCard;