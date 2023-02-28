import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

interface ContainedButtonProps {
  title?: string;
  variant?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
  onClick?: () => void;
}

const useStyles = makeStyles({
  containedButton: {
    backgroundColor: "primary",
    color: "primary.dark",
    "&:hover": {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      border: "1px solid #FFFFFF",
    },
  },
  outlinedButton: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#000000",
    },
  },
});

const CustomButton = (props: ContainedButtonProps) => {
  const { title, variant, width, height, borderRadius, fontSize, onClick } =
    props;

  const classes = useStyles();

  return (
    <Button
      className={
        variant === "contained"
          ? classes.containedButton
          : classes.outlinedButton
      }
      onClick={onClick}
      variant="contained"
      sx={{
        width: { width },
        height: { height },
        border: { borderRadius },
        fontSize: { fontSize },
        fontWeight: "bold",
        textTransform: "none",
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
