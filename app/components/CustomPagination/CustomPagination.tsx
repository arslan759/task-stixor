import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { PaginatorProps } from "@/types";

const CustomPagination = ({
  count,
  boundaryCount,
  siblingCount,
  page,
  onChange,
}: PaginatorProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        boundaryCount={boundaryCount}
        siblingCount={siblingCount}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
        sx={{
          "& .MuiPagination-ul": {
            gap: "16px",
            "@media (max-width:767px)": {
              gap: "8px",
            },
          },

          "& .MuiPagination-ul li": {
            width: "48px",
            height: "48px",

            "@media (max-width:767px)": {
              width: "30px",
              height: "30px",
            },
          },

          "& .MuiPaginationItem-root": {
            color: "#090909",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "normal",
            fontFamily: "tomorrow",
            width: "48px",
            height: "48px",
            borderRadius: "4px",
            border: "1px solid #7911EA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "@media (max-width:767px)": {
              width: "30px",
              height: "30px",
            },
          },

          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "#7911EA",
            color: "#fff",
          },
          "& .MuiPaginationItem-page.Mui-selected:hover": {
            backgroundColor: "#7911EA",
            color: "#fff",
          },
          "& .MuiPaginationItem-page:hover": {
            backgroundColor: "#7911EA",
            color: "#fff",
          },

          "& .MuiPaginationItem-page": {
            backgroundColor: "transparent",
          },
          "& .MuiPaginationItem-page.Mui-selected.Mui-focusVisible": {
            backgroundColor: "transparent",
          },
          "& .MuiPaginationItem-page.Mui-focusVisible": {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
};

export default CustomPagination;
