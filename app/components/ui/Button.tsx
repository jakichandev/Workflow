import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Link = {
    active: boolean;
    href?: string;
}

type  ButtonProps = {
    label: string;
    onClick: () => void;
    onFocus?: () => void;
    disabled?: boolean;
    className?: string;
    link?: Link;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, onFocus, disabled, className, link = { active: false } }) => {
    const router = useRouter();
    
    const handleClick = () => {
        if (link.active && link.href) {
            router.push(link.href);
        } else {
            onClick();
        }
    };
    return (
        <button onClick={handleClick} onFocus={onFocus} disabled={disabled} className={className}>
            {label}
        </button>
    );
}

export default Button;