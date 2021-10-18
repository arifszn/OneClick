import BaseLayout from "./components/Layout/BaseLayout";
import ActionCard from "./components/action/ActionCard";
import { actions } from "./components/action/actions";
import { useEffect, useState } from "react";
import { misc } from "./config";
import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        Aos.init({
            easing: 'linear',
            offset: 10,
            disable: !misc.animation
        });
    }, [])
    
    return (
        <BaseLayout>
            <div className="grid w-full md:w-11/12 gap-4 mb-48 -mt-48 xl:pb-0 bg-opacity-60 glass xl:rounded-box text-base-content">
                <div className="px-8 pt-6">
                    <input 
                        placeholder="Search Action"
                        class="w-full rounded-full input input-ghost placeholder-primary-content text-primary-content focus:text-primary-content input-bordered focus:bg-transparent"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
                <div className="p-4 pt-0">
                    <div class="w-full transition-colors ease-linear">
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 p-4">
                            {
                                actions.filter(action => {
                                    return (
                                        action.name.toLowerCase().includes(query.toLowerCase()) ||
                                        action.description.toLowerCase().includes(query.toLowerCase())
                                    );
                                }).map((action, index) => (
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
