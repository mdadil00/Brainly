import { CrossIcon } from "../icons/cross";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModal({ open, onClose }) {

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
                        <Input placeholder={"title"} />
                        <Input placeholder={"link"} />

                    </div>

                    <div className="flex justify-center"><Button variant="primary" text={"Submit"} /></div>

                </span>

            </div>

        </div>}
    </div>

}

