import { PrimaryBtnProps } from "@/types";
import { Button, CircularProgress, Typography } from "@mui/material";

const PrimaryBtn = ({
  handleClick,
  type = "button",
  text,
  disabled,
  loading,
}: PrimaryBtnProps) => {
  return (
    <Button
      // className={`flex items-center justify-center w-full h-full group`}
      disabled={disabled || loading ? true : false}
      disableElevation
      type={type}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        textTransform: "capitalize",
        backgroundColor: "#7911EA !important",
        borderRadius: "5px",
        padding: "10px",

        color: "#fff",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#4C1EA7 !important",
          // color: "#fff !important",
          transform: "scale(1.05)",
        },
      }}
      onClick={handleClick}
    >
      {loading ? (
        <CircularProgress
          sx={{
            color: "grey",
            width: "20px !important",
            height: "20px !important",
          }}
        />
      ) : (
        <Typography
          sx={{
            fontFamily: "tomorrow !important",
          }}
        >
          {text}
        </Typography>
      )}
    </Button>
  );
};

export default PrimaryBtn;
