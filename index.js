const BUY_CAKE = "BUY_CAKE";

//Action has two parts: a) An action creator which is a function and b )an action which is a method
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//reducer
// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
