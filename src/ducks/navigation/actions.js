import { createAction } from "redux-actions";

const base = "ducks/navigation";

// actions
export const activeSound = createAction(`${base}/ACTIVE_SOUND`);
export const deactiveSound = createAction(`${base}/DEACTIVE_SOUND`);