import { FC, FormEvent } from "react";
import {
  AuthError,
  UserCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Auth/AuthSlice";

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const email = (e.currentTarget.email as HTMLInputElement)?.value;
    const password = (e.currentTarget.password as HTMLInputElement)?.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        // Signed in
        const { email } = userCredential.user;
        dispatch(login(email));

        navigate("/");
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="container flex items-center justify-center h-[80vh]">
      <form
        onSubmit={handleLogForm}
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
};
