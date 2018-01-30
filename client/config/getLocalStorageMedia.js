// const getLocalMedia = () => {
//   const local_media = localStorage.getItem("media");
//   if(local_media !== null) {
//     return JSON.parse(local_media);
//   } else {
//     return null;
//   }
// }
// export default getLocalMedia;



export default class LocalStateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("media");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("media", serializedState);

        }
        catch (err) {
          console.log(err);
        }
    }

    initializeState() {
        return {
              //state object
            }
        };
}
