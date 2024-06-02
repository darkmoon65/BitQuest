export const buttonStyle = {
  background: "linear-gradient(to bottom, green, #000)",
  color: "#ffffff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "20px",
};

export const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
};

export const cardStyle = {
  width: "100%",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
};

export const titleStyle = {
  fontWeight: "bold",
  fontSize: "20px",
  color: "white",
};

export const incorrectButtonStyle = {
  ...buttonStyle,
  background: "linear-gradient(to bottom, #FF0000, #800000)",
};
