import BaseLayout from './components/layout/BaseLayout';
import ActionCard from './components/action/ActionCard';
import { actions } from './data';
import { useState } from 'react';
import config from '../config';

const App = () => {
  const [query, setQuery] = useState('');

  const getActions = (query) => {
    if (query) {
      return actions.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(query.toLowerCase())) ||
          (item.tags &&
            item.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            ))
        );
      });
    } else {
      return actions;
    }
  };

  return (
    <BaseLayout query={query} setQuery={setQuery}>
      <div
        className={`grid w-full md:w-11/12 gap-4 ${
          config.extension ? 'pt-5' : '-mt-48 glass mb-48'
        } xl:pb-0 bg-opacity-60 xl:rounded-box text-base-content`}
      >
        <div className={config.extension ? '' : 'p-4'}>
          <div className="w-full transition-colors ease-linear">
            <div
              className={`grid gap-6 p-4 ${
                config.extension
                  ? 'grid-cols-4'
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6'
              }`}
            >
              {getActions(query).map((action, index) => (
                <ActionCard key={index} action={action} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default App;
