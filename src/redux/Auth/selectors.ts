import { IUser } from "../../components/Header/Header";

export interface RootState {
  auth: IUser;
}

export const getUser = (state: RootState) => state.auth;
