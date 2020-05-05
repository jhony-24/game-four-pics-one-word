import { createAction } from "redux-actions";

const base = "ducks/navigation";

// actions
export const enableSound = createAction(`${base}/ENABLE_SOUND`);