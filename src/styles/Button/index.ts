import { styled } from "..";

export const ButtonContainer = styled("button", {
    backgroundColor: "$green500",
    padding: 10,
    borderRadius: 10,
    cursor: "pointer",
    border: "none",

    "&:hover": {
        backgroundColor: "blue",
    },
})