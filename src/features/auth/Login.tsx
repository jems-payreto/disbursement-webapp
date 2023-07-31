import { useAppDispatch } from "@/app/hook";

import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        console.log("submit");
        await login({ name: "James Santos", email: "james.santos@payreto.com" })
            .unwrap()
            .then((res) => {
                console.log("res", res);

                dispatch(setCredentials(res));

                navigate("/");
            })
            .catch((err) => console.error("err", err));
    };

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;
