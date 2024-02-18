import { createStore } from "effector";
import { generatePasswordFx } from "../api/generate";

export const $password = createStore<string>('');

$password.on(generatePasswordFx.doneData, (_, password) => password);