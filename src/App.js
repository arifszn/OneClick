import BaseLayout from "./components/Layout/BaseLayout";
import ActionCard from "./components/action/ActionCard";
import { actions } from "./components/action/actions";

const App = () => {
    return (
        <BaseLayout>
            <div className="grid w-full md:w-11/12 gap-4 mb-48 -mt-48 xl:pb-0 bg-opacity-60 glass xl:rounded-box text-base-content">
                <div className="px-4 pt-4">
                    <input 
                        placeholder="Search Action"
                        class="w-full rounded-full input input-ghost placeholder-primary-content text-primary-content focus:text-primary-content input-bordered focus:bg-transparent"
                    />
                </div>
                <div className="px-4 pt-4">
                    <div class="w-full transition-colors ease-linear">
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 p-4 mb-4">
                            {
                                actions.map((action, index) => (
                                    <ActionCard action={action}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

export default App;
