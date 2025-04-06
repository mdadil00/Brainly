import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: String;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}
const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
};
const defaultStyles = "px-4 py-2 rounded-md font-normal flex";

export function Button({ variant, text, startIcon, onClick, fullWidth, loading }: ButtonProps) {
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + (fullWidth ? " w-full flex items-center justify-center" : "") + (loading ? " opacity-45" : "")} disabled={loading}>
        {startIcon && <span className="flex items-center pr-2">{startIcon}</span>}
        <span>{text}</span>
    </button>
}