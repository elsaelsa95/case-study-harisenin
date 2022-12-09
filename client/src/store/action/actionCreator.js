export const createAsset = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/assets", {
      method: "POST",
      body: JSON.stringify(payload),
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
        return error;
      });
  };
};

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

export const readDetailAsset = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/assets/${id}`, {
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "READ_DETAIL_ASSET", payload: data });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};

export const updateAsset = (id, payload) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/assets/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "UPDATE_ASSET", payload: data });
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

export const readCategory = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/categories", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "READ_CATEGORY", payload: data });
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

export const deleteCategory = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/categories/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(readCategory());
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};

export const readProduct = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/productAsset", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "READ_PRODUCT", payload: data });
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

export const deleteProduct = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/productAsset/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(readProduct());
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};
