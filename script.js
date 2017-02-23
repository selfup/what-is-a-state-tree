const state = {
  message: new Date().getTime(),
};

const actions = {
  MODIFY() {
    return {
      message: new Date().getTime(),
    };
  },
};

const App = ({ state }) => {
  const { message } = state;

  return (`
    <div>
      <h1 id="header-tag"> ${message} </h1>
      <button
        onclick='dispatch("MODIFY")'
      >
        Change Number
      </button>
    </div>
  `);
};

const store = new Store(state, actions, render(App, 'app'));

const dispatch = store.dispatch;

render(App, 'app')(store);
