import React from "react";
import { StyledButton } from "./styles/Button.styled";

export const Button = ({ onClick, text }) => {
    return (
        <>
            <StyledButton onClick={onClick}>{text}</StyledButton>
        </>
    );
};
