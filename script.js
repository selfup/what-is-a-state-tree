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

const store = new Store(state, actions, render(App, 'app'));

const dispatch = store.dispatch;

render(App, 'app')(store);
