import { styled } from "@mui/system";

export const StyledTextArea = styled("textarea")(
  (props: { isError?: boolean }) => ({
    width: 250,
    height: 100,
    backgroundColor: "#fff",
    color: "#000",
    padding: "8px 12px",
    boxSizing: "border-box",
    margin: 0,
    border: `2px solid ${props.isError ? "#E16868" : "#6076FF"}`,
    borderRadius: "8px",
    outline: "none",
    fontSize: 16,
  })
);
