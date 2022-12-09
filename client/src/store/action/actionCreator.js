export const createAsset = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
      headers: {
        "Content-Type": "application/json",
      },
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

export const createCategory = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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
        return error;
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

export const readDetailCategory = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/categories/${id}`, {
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "READ_DETAIL_CATEGORY", payload: data });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};

export const updateCategory = (id, payload) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "UPDATE_CATEGORY", payload: data });
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

export const createProduct = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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
        return error;
      });
  };
};

export const readProduct = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/products", {})
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

export const readDetailProduct = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/products/${id}`, {
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "READ_DETAIL_PRODUCT", payload: data });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};

export const updateProduct = (id, payload) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "UPDATE_PRODUCT", payload: data });
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
    fetch(`http://localhost:3001/products/${id}`, {
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
