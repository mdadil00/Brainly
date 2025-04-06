import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
        })
        alert("You have Signed UP!!!!")
        navigate("/signin")

    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white rounded-xl p-8 border min-w-48">
            <Input placeholder="Username" reference={usernameRef} />
            <Input placeholder="Password" reference={passwordRef} />

            <div className="flex justify-center pt-4">
                <Button variant="primary" text="Signup" fullWidth={true} loading={false} onClick={signup} />
                {/* this loading is hard-coded should make it user responsive */}
            </div>

        </div>


    </div>
}