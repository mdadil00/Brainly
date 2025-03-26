import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate=useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response=await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password
        })
        const jwt=response.data.token;
        localStorage.setItem("token",jwt);
        // redirect the user to the dashboard
        navigate("/dashboard");

    }



    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white rounded-xl p-8 border min-w-48">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />

            <div className="flex justify-center pt-4">
                <Button variant="primary" text="SignIn" fullWidth={true} loading={false} onClick={signin}/> 
                {/* this loading is hard-coded should make it user responsive */}
            </div>

        </div>


    </div>
}