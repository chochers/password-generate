import { createEffect } from "effector";
import { api } from "./axiosInstance";
import { IGenerate } from "../interfaces/IGenerate";

export const generatePasswordFx  = createEffect(async (dataGenerate: IGenerate) => {
    try {
        const { data } = await api.post('/pass/getPass', dataGenerate);
        return data;
    } catch (error) {
        throw error;
    }
});