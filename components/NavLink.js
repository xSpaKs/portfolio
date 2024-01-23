import React from "react";
import Link from "next/link";

const NavLink = ({ name }) => {
    return (
        <Link href={name.toLowerCase()}>
            <p className="text-textColor hover:text-textHoverColor transition-color duration-300 font-light whitespace-nowrap text-sm sm:text-base font-mono">
                {name}
            </p>
        </Link>
    );
};

export default NavLink;