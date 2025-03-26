import { LogoIcon } from "../icons/Logo";
import { TwitterIcon } from "../icons/twitter";
import { YoutubeIcon } from "../icons/ytIcon";
import { SidebarItem } from "./side-items";

export function SideBar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-00 top-0 pl-6">

        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-600">
                <LogoIcon/>
            </div>
            Brainly
        </div>

        <div className="pt-8 pl-6">
        <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon/>} />
        </div>
    </div>
}