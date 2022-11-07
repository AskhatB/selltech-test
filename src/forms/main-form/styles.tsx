import { styled } from "@mui/system";

export const StyledFormWrapper = styled("div")(() => ({
  display: "block",
  width: "max-content",
  backgroundColor: "#fff",
  color: "#000",
  padding: "32px",
  boxSizing: "border-box",
  margin: "100px auto",
  border: "1px solid #DDD",
  borderRadius: "8px",
  outline: "none",
  fontSize: 16,

  h1: {
    margin: "0 0 12px",
    padding: 0,
  },

  ".ant-form-item-explain-error": {
    color: "red",
    fontSize: 12,
    margin: "0px 5px 12px",
  },
}));

export const StyledFieldWrapper = styled("div")(() => ({
  marginBottom: "12px",
}));
