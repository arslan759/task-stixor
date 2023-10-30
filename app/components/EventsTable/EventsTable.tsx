import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import moment from "moment";
import Link from "next/link";

interface event {
  location: string;
  date: string;
  name: string;
  category: string;
}

interface Props {
  events: event[];
}

const EventsTable = ({ events }: Props) => {
  return (
    <>
      <TableContainer>
        <Table stickyHeader>
          <TableHead
            sx={{
              "& .MuiTableCell-root": {
                fontFamily: "Josefin Sans",
                color: "#090909",
                fontSize: "16px !important",
                fontWeight: "600 !important",
                "@media (max-width: 767px)": {
                  fontSize: "14px !important",
                },
              },
            }}
          >
            <TableRow>
              <TableCell>No .</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& .MuiTableCell-root": {
                fontFamily: "tomorrow",
                color: "#888",
                fontSize: "16px !important",
                fontWeight: "600 !important",
                "@media (max-width: 767px)": {
                  fontSize: "14px !important",
                },
              },
            }}
          >
            {events?.map((row: any, index: any) => (
              <TableRow
                key={row?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row?.title}</TableCell>
                <TableCell>{moment(row?.date).format("MMM Do YYYY")}</TableCell>
                <TableCell>{row?.country}</TableCell>
                <TableCell>{row?.category}</TableCell>
                <TableCell>
                  <div className="w-fit">
                    <Link href={`/event/${row?.id}`}>
                      <PrimaryBtn
                        text="View Details"
                        handleClick={() => console.log("View")}
                      />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EventsTable;
