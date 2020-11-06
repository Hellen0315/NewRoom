export const type = "findResults";

const findResults = (text) => ({
  type,
  payload: text
});

const fetchResults = (text) => (dispatch) => {
  fetch(`https://api.canillitapp.com/search/${text}`)
    .then((data) => data.json())
    .then((resp) => {
      const result = resp.slice(0, 10);
      dispatch(findResults(result));
    });
};

export default fetchResults;
