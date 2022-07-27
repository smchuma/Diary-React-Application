import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PaginationStyle = ({ entryPerPage, totalEntries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEntries / entryPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        margin: "30px 0",
      }}
    >
      {pageNumbers.map((number) => {
        return (
          <Pagination
            variant="outline"
            key={number}
            page={number}
            hideNextButton
            hidePrevButton
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#ffffff",
              },
            }}
            size="large"
            onClick={() => paginate(number)}
            onChange={
              ((event, value) => paginate(value), window.scroll(0, 100))
            }
          />
        );
      })}
    </Box>
  );
};

export default PaginationStyle;
