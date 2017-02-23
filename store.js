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
