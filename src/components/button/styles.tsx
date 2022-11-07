import { styled } from "@mui/system";

export const StyledButton = styled("button")((props: { fluid: boolean }) => ({
  width: props.fluid ? "100%" : "auto",
  border: "none",
  outline: "none",
  backgroundColor: "#6076FF",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: 8,
  fontSize: 16,
  cursor: "pointer",
}));
