const app = document.querySelector('#app');

class Store {
  constructor(state = {}, actions = {}, render = () => {}) {
    this.state = state;
    this.actions = actions;
    this.render = render;
    this.dispatch = (action, options) => {
      const newValue = this.actions[action](this.state, options);
      Object.assign(this.state, newValue);
      this.render(this);
    };
  }
}

const state = {
  message: new Date().getTime(),
};

const actions = {
  MODIFY() {
    return { message: new Date().getTime() };
  },
};

const render = (store) => {
  app.innerHTML = template(store);
};

const store = new Store(state, actions, render);

const template = ({ state }) => {
  const { message } = state;

  return (`
    <div>
      <h1 id="header-tag"> ${message} </h1>
      <button
        onclick='store.dispatch("MODIFY")'
      >
        Change Number
      </button>
    </div>
  `);
};

render(store);
