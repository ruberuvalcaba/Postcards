export const addReloadListener = () => {
  window.addEventListener("beforeunload", onUnload);
};

export const removeReloadListener = () => {
  window.removeEventListener("beforeunload", onUnload);
};

const onUnload = (event) => {
    const message = "Reload confirmation...";
    event.returnValue = message; // Gecko, Trident, Chrome 34+
    return message; // Gecko, WebKit, Chrome <34
};
