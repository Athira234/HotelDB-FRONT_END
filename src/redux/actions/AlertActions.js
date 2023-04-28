export const SHOW_MODAL = `SHOW_MODAL`;
export const HIDE_MODAL = "HIDE_MODAL";

export const showModal = (message, type) => {
  return {
    type: SHOW_MODAL,
    payload: { message, type },
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
