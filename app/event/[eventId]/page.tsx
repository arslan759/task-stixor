"use client";

import { Event } from "@/types";
import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CustomBreadCrumbs from "@/app/components/CustomBreadCrumbs";

const EventPage = ({ params }: { params: { eventId: string } }) => {
  let { eventId } = params;

  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState(false);

  const fetchEvent = async () => {
    setLoading(true);

    const queryParams = new URLSearchParams();

    queryParams.set("id", eventId);

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
    console.log(data);

    setEvent(data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  if (loading)
    return (
      <div className="w-full flex justify-center items-center py-[56px] md:py-[64px]">
        <CircularProgress
          sx={{
            color: "#fff",
          }}
        />
      </div>
    );

  if (!event)
    return (
      <div className="py-[24px] md:py-[100px] flex justify-center">
        <div className={styles.card}>
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between mt-[24px] md:mt-[48px] gap-y-[24px]">
            <Typography
              sx={{
                fontSize: "28px !important",
                fontWeight: "700 !important",
                lineHeight: "normal",
                width: "100%",
                fontFamily: "Josefin Sans",
                textTransform: "capitalize",
                color: "#7911EA",
                fontFeatureSettings: "'clig' off, 'liga' off",
                "@media (max-width: 767px)": {
                  fontSize: "18px !important",
                },
              }}
            >
              Event not found
            </Typography>
          </div>
        </div>
      </div>
    );

  return (
    <div className="py-[24px] md:py-[100px] flex justify-center">
      <div className={styles.card}>
        <CustomBreadCrumbs />
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
            {event?.title}
          </Typography>
        </div>

        <Typography
          sx={{
            fontSize: "28px !important",
            fontWeight: "400 !important",
            lineHeight: "normal",
            marginTop: "24px !important",
            fontFamily: "tomorrow",
            textTransform: "lowercase",
            color: "#190849",
            fontFeatureSettings: "'clig' off, 'liga' off",
            "@media (max-width: 767px)": {
              fontSize: "18px !important",
            },
          }}
        >
          {event?.description ? event?.description : "No description"}
        </Typography>
      </div>
    </div>
  );
};

export default EventPage;
