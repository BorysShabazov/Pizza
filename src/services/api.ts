import axios from "axios";

const instance = axios.create({
  baseURL: "https://65b94b1cb71048505a8a98a6.mockapi.io/api/v1/menu/",
});

export interface item {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  imgUrl: string;
}

type IGet = item[];

export const getPizza = async () => {
  try {
    const data = await instance.get<IGet>("pizza");
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
