const app = document.querySelector('#app');

const template = ({ state }) => {
  const { message } = state;

  return (`
    <div>
      <h1 id="header-tag"> ${message} </h1>
    </div>
  `);
};

const render = (store) => {
  if (!store || !store.state) return null;
  app.innerHTML = template(store);
};

/**
  Until we build our own Store Object
  keep render(store) commented out until we copy paste it in!
*/

// render(store);
