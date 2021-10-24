import BaseLayout from "./components/layout/BaseLayout";
import ActionCard from "./components/action/ActionCard";
import { actions } from "./components/action/actions";
import { useState } from "react";

const App = () => {
    const [query, setQuery] = useState('');

    return (
        <BaseLayout query={query} setQuery={setQuery}>
            <div className="grid w-full md:w-11/12 gap-4 mb-48 -mt-48 xl:pb-0 bg-opacity-60 glass xl:rounded-box text-base-content">
                <div className="p-4">
                    <div className="w-full transition-colors ease-linear">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 p-4">
                            {
                                actions.filter(action => {
                                    return (
                                        action.name.toLowerCase().includes(query.toLowerCase()) ||
                                        action.description.toLowerCase().includes(query.toLowerCase())
                                    );
                                }).map((action, index) => (
                                    <ActionCard key={index} action={action}/>
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
