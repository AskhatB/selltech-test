import { styled } from "@mui/system";

const INPUT_WIDTH = 250;

export const StyledInput = styled("input")((props: { isError?: boolean }) => ({
  width: INPUT_WIDTH,
  height: 50,
  backgroundColor: "#fff",
  color: "#000",
  padding: "8px 12px",
  boxSizing: "border-box",
  margin: 0,
  border: `2px solid ${props.isError ? "#E16868" : "#6076FF"}`,
  borderRadius: "8px",
  outline: "none",
  fontSize: 16,
}));

export const StyledOptions = styled("ul")(() => ({
  width: INPUT_WIDTH,
  backgroundColor: "#fff",
  maxHeight: 200,
  listStyle: "none",
  padding: 0,
  margin: "5px 0 0",
  borderRadius: "8px",
  border: "2px solid #6076FF",
  overflow: "auto",
  boxSizing: "border-box",
  zIndex: 1,
  position: "absolute",
}));

export const StyledSingleOption = styled("li")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 12px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#eee",
  },
}));
