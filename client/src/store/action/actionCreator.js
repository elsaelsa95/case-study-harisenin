export const readAsset = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/assets", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "READ_ASSET", payload: data });
        console.log(data, "data");
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};

export const deleteAsset = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/assets/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(readAsset());
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};
