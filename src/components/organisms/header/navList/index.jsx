import { CustomLink, StyledUl } from "./styled.jsx";
import { Button, Link } from "../../../atoms/index.jsx";
import React from "react";


function NavList(props) {
    const links = props.$links
    return (
        <StyledUl {...props}>
            {links.map((link) => (
                <Link
                    key={link.key}
                    $nav
                    onClick={() => props.$scrollTo(link.route)}
                >

                    {link.type === "link" ?
                        <CustomLink>
                            {link.txt}
                        </CustomLink>
                        :
                        <Button $secondary >
                            {link.txt}
                        </Button >
                    }
                </Link >
            ))}
        </StyledUl >
    );
}

export default React.memo(NavList);