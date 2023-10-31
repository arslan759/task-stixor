import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomBreadCrumbs = () => {
  const pathName = usePathname();
  const lastPathName = pathName?.split("/").pop();

  return (
    <Breadcrumbs>
      <Link href={"/"}>
        <Typography
          sx={{
            fontSize: "18px !important",
            fontWeight: "600 !important",
            lineHeight: "28px",
            fontFamily: "Josefin Sans",
            textTransform: "capitalize",
            color: "#190849",
            cursor: "pointer",
            "@media (max-width: 767px)": {
              fontSize: "16px !important",
            },
          }}
        >
          Events
        </Typography>
      </Link>

      <Typography
        sx={{
          fontSize: "18px !important",
          fontWeight: "600 !important",
          lineHeight: "28px",
          fontFamily: "Josefin Sans",
          textTransform: "capitalize",
          color: "#7911EA !important",
          "@media (max-width: 767px)": {
            fontSize: "16px !important",
          },
        }}
      >
        {lastPathName}
      </Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadCrumbs;
