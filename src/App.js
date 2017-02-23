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
