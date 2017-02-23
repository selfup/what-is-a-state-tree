class Store {
  constructor(state = {}, actions = {}, paint = () => {}) {
    this.state = state;
    this.actions = actions;
    this.paint = paint;
    this.dispatch = this.dispatch.bind(this);
  }

  dispatch(action, options) {
    const newValue = this.actions[action](this.state, options);
    Object.assign(this.state, newValue);
    this.paint(this), 'app';
  };
}

const render = (template, id) => {
  const app = document.getElementById(id);

  return () => {
    app.innerHTML = template(store);
  };
};

// END OF API

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
