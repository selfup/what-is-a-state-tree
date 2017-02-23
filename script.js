const store = new Store(state, actions, render(App, 'app'));

const dispatch = store.dispatch;

render(App, 'app')(store);
