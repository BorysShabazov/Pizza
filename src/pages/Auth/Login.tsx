import { FC } from "react";

export const Login: FC = () => (
  <div className="container flex items-center justify-center h-[80vh]">
    <form
      action="submit"
      className="flex flex-col gap-[8px] p-[24px] border-[1px] rounded-xl"
    >
      <label htmlFor="email">email:</label>
      <input
        type="text"
        name="email"
        id="email"
        className="border-[1px] rounded-lg px-[8px] py-[4px]"
      />
      <label htmlFor="password">password:</label>
      <input
        type="password"
        name="password"
        id="password"
        className="border-[1px] rounded-lg px-[8px] py-[4px]"
      />
      <button className="border-[1px] rounded-lg p-[4px]">sign in</button>
    </form>
  </div>
);
