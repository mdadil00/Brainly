import { useRef, useState } from "react";
import { CrossIcon } from "../icons/cross";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        onClose();

    }

    return <div>
        {open && <div className="bg-slate-500 fixed top-0 left-0 w-screen h-screen bg-opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 rounded">

                    <div className="flex justify-end cursor-pointer">
                        <div onClick={onClose}>
                            <CrossIcon />
                        </div>
                    </div>

                    <div>
                        <Input reference={titleRef} placeholder={"title"} />
                        <Input reference={linkRef} placeholder={"link"} />
                    </div>

                    <div className="flex justify-center">
                        <h1>Type</h1>
                    </div>

                    <div className="flex gap-1 p-4">
                        <Button text={"Youtube"} variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Youtube);
                        }} />
                        <Button text={"Twitter"} variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Twitter);
                        }} />
                    </div>



                    <div className="flex justify-center">
                        <Button onClick={addContent} variant="primary" text={"Submit"} />
                    </div>

                </span>

            </div>

        </div>}
    </div>

}

