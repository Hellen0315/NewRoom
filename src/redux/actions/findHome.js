import moment from "moment";
export const type = "findHome";

const findHome = (text) => ({
  type,
  payload: text
});

const fetchHome = () => (dispatch) => {
  fetch(`https://api.canillitapp.com/latest/${moment().format("yyyy-MM-DD")}`)
    .then((data) => data.json())
    .then((news) => {
      const result = news.slice(0, 10);
      dispatch(findHome(result));
    });
};

export default fetchHome;
