import { styled } from "..";

export const ButtonContainer = styled("button", {
    backgroundColor: "$primary",
    padding: 10,
    borderRadius: 10,
    cursor: "pointer",

    "&:hover": {
        backgroundColor: "blue",
    },
})