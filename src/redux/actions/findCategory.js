export const type = "findCategory";

const findCategory = (Id) => ({
  type,
  payload: Id
});

const fetchCResults = (id) => (dispatch) => {
  fetch(`https://api.canillitapp.com/news/category/${id}`)
    .then((data) => data.json())
    .then((resp) => {
      const result = resp.slice(0, 10);
      dispatch(findCategory(result));
    });
};

export default fetchCResults;
