"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CircularProgress, Typography } from "@mui/material";
import { categories, sortOptions } from "@/constants";
import EventsTable from "../EventsTable";
import Dropdown from "../Dropdown";
import CustomPagination from "../CustomPagination";

const EventCard = () => {
  const [events, setEvents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [loadingEvents, setLoadingEvents] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [pageCount, setPageCount] = useState<number>(0);
  const [page, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const handlePageClick = (pageNum: number) => {
    setOffset((pageNum - 1) * itemsPerPage);
    setCurrentPage(pageNum);
  };

  const fetchEvents = async () => {
    setLoadingEvents(true);

    const queryParams = new URLSearchParams();

    if (category) {
      queryParams.set("category", category);
    }
    if (itemsPerPage) {
      queryParams.set("limit", itemsPerPage.toString());
    }

    if (offset) {
      queryParams.set("offset", offset.toString());
    }
    if (sortBy) {
      queryParams.set("sort", sortBy);
    }

    const baseUrl = "https://api.predicthq.com/v1/events/";
    const urlWithQuery = new URL(baseUrl);
    urlWithQuery.search = queryParams.toString();

    const res = await fetch(urlWithQuery.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PREDICTHQ_API_KEY}`,
      },
    });
    const data = await res.json();
    // console.log(data);

    setTotalCount(data.count);
    setEvents(data.results);
    setLoadingEvents(false);
  };

  useEffect(() => {
    fetchEvents();
  }, [category, offset, itemsPerPage, sortBy]);

  useEffect(() => {
    let page = Math.ceil(totalCount / itemsPerPage);
    setPageCount(page);
  }, [totalCount]);

  return (
    <div className="py-[24px] md:py-[100px] flex justify-center">
      <div className={styles.card}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-[24px] md:mt-[48px] gap-y-[24px]">
          <Typography
            sx={{
              fontSize: "48px !important",
              fontWeight: "700 !important",
              lineHeight: "normal",
              fontFamily: "Josefin Sans",
              textTransform: "capitalize",
              color: "#7911EA",
              fontFeatureSettings: "'clig' off, 'liga' off",
              "@media (max-width: 767px)": {
                fontSize: "24px !important",
              },
            }}
          >
            Events Details
          </Typography>
        </div>

        <div>
          <div className="w-full flex flex-wrap gap-y-[12px] md:gap-x-[24px]">
            <div className="w-[100%] md:w-[298px]">
              <Dropdown
                value={category}
                onChange={setCategory}
                label="category"
                options={categories}
              />
            </div>

            <div className="w-[100%] md:w-[298px]">
              <Dropdown
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
                label="sort by"
              />
            </div>
          </div>
        </div>
        {loadingEvents ? (
          <div className="w-full flex justify-center items-center mt-[56px] md:mt-[64px]">
            <CircularProgress
              sx={{
                color: "#4C1EA7",
              }}
            />
          </div>
        ) : events.length > 0 ? (
          <>
            <div className="mt-[56px] md:mt-[64px]">
              <EventsTable events={events} />
            </div>

            <div className="mt-[32px] md:mt-[56px] flex justify-center">
              <CustomPagination
                count={pageCount}
                boundaryCount={1}
                siblingCount={1}
                page={page}
                onChange={handlePageClick}
              />
            </div>
          </>
        ) : (
          <Typography
            sx={{
              fontSize: "28px !important",
              fontWeight: "700 !important",
              lineHeight: "normal",
              fontFamily: "Josefin Sans",
              marginTop: "56px !important",
              textTransform: "capitalize",
              color: "#7911EA",
              textAlign: "center",
              fontFeatureSettings: "'clig' off, 'liga' off",
              "@media (max-width: 767px)": {
                fontSize: "18px !important",
              },
            }}
          >
            No events found
          </Typography>
        )}
      </div>
    </div>
  );
};

export default EventCard;
