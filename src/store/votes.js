const initialState = {
  candidates: [
    { name: 'Mahmoud', votes: 0 },
    { name: 'Fatima', votes: 0 },
    { name: 'Mai', votes: 0 },
  ],
  totalVotes: 0,
};
// Reducers take in 2 inputs (state and action) the default for state will be the initState
// its just a switch case statement
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREMENT':
      const totalVotes = state.totalVotes + 1;
      const candidates = state.candidates.map((candidate) => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        } else {
          return candidate;
        }
      });
      return { candidates, totalVotes };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

// Actions
// Actions are objects with type and payload
export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};
