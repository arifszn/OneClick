import BaseLayout from './components/layout/BaseLayout';
import ActionCard from './components/action/ActionCard';
import { actions as rawActions } from './data';
import { useEffect, useRef, useState } from 'react';
import config from '../config';
import { RiFileListLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { active_tab_key, favorite_actions_key } from './helpers/utils';

const tabs = {
  all: 'all',
  favorites: 'favorites',
};

const App = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState(tabs.all);
  const [actions, setActions] = useState(rawActions);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (!(localStorage.getItem(active_tab_key) === null)) {
      let savedTab = localStorage.getItem(active_tab_key);

      if (savedTab === tabs.all || savedTab === tabs.favorites) {
        setActiveTab(savedTab);
      }
    }

    const savedActions = JSON.parse(localStorage.getItem(favorite_actions_key));

    const actionsWithFavorites = actions.map((action) => {
      return {
        ...action,
        favorite:
          savedActions &&
          savedActions.find((storedAction) => storedAction === action.key)
            ? true
            : false,
      };
    });
    setActions(actionsWithFavorites);
  }, []);

  const getActions = (query, showFavoritesOnly) => {
    let filteredActions = actions;

    if (query) {
      filteredActions = filteredActions.filter((item) => {
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
    }

    if (showFavoritesOnly) {
      filteredActions = filteredActions.filter(
        (item) => item.favorite === true
      );
    }

    return filteredActions;
  };

  const clearSearch = () => {
    searchInputRef.current.value = '';
    setQuery('');
  };

  const changeTab = (tab) => {
    clearSearch();

    setActiveTab(tab);

    localStorage.setItem('awesome-shortcuts-active-tab', tab);
  };

  const renderActions = () => {
    const filteredActions = getActions(query, activeTab === tabs.favorites);

    if (filteredActions.length !== 0) {
      return (
        <div
          className={`grid gap-6 p-4 ${
            config.extension
              ? 'grid-cols-4'
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6'
          }`}
        >
          {filteredActions.map((action) => (
            <ActionCard
              key={action.key}
              action={action}
              setActions={(newActions) => {
                setActions(newActions);
              }}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="card text-center shadow-2xl bg-base-100 m-4">
          <div className="flex items-center justify-center m-10 md:m-16">
            <div className="text-center">
              <div className="text-6xl text-primary-content mb-4">
                {query ? (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto bg-primary bg-opacity-50 rounded-full py-3 px-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    ></path>
                  </svg>
                ) : (
                  <AiOutlineHeart className="mx-auto bg-primary bg-opacity-50 rounded-full py-3 px-3" />
                )}
              </div>
              <h2 className="text-lg font-medium mb-2 opacity-90">
                {query ? 'Nothing Found' : 'No Favorite Shortcut'}
              </h2>
              <p className="mb-4 opacity-60">
                {query
                  ? 'No shortcut matches your search.'
                  : 'Try adding some favorite shortcuts first.'}
              </p>
              {query ? (
                <button
                  className="btn btn-primary btn-outline capitalize opacity-90 btn-sm"
                  onClick={() => clearSearch()}
                >
                  Clear Search
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-outline capitalize opacity-90 btn-sm"
                  onClick={() => {
                    changeTab(tabs.all);
                  }}
                >
                  Add Favorites
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }
  };

  const renderTabs = () => {
    return (
      <div className="tabs tabs-boxed p-2 bg-base-100 shadow-md">
        <div className="tooltip" data-tip="All Shortcuts">
          <a
            className={`tab gap-2 ${
              activeTab === tabs.all ? 'tab-active opacity-70' : ''
            }`}
            onClick={() => changeTab(tabs.all)}
          >
            <div>
              <RiFileListLine className="h-5 w-5" />
            </div>
          </a>
        </div>
        <div className="tooltip" data-tip="Favorites">
          <a
            className={`tab gap-2 ${
              activeTab === tabs.favorites ? 'tab-active opacity-70' : ''
            }`}
            onClick={() => changeTab(tabs.favorites)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  const renderSearchBar = () => {
    return (
      <div className="opacity-90">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-md shadow-md"
              ref={searchInputRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setQuery(searchInputRef.current.value);
                }
              }}
            />
            <button
              className="btn btn-square"
              onClick={() => setQuery(searchInputRef.current.value)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <BaseLayout>
      <div
        className={`grid w-full md:w-11/12 gap-4 ${
          config.extension ? 'pt-5' : '-mt-48 glass mb-48'
        } xl:pb-0 bg-opacity-60 xl:rounded-box text-base-content`}
      >
        <div className={config.extension ? '' : 'p-4'}>
          <div className="w-full transition-colors ease-linear">
            <div className="flex flex-col">
              <div
                className={`flex ${
                  !config.extension ? 'flex-col md:flex-row' : 'flex-row'
                } items-center justify-between my-3 mx-4 gap-3`}
              >
                <div>{renderTabs()}</div>
                <div>{renderSearchBar()}</div>
              </div>
              {renderActions()}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default App;
