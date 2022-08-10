import type { NextPage } from "next";
import Head from "next/head";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fragment, useEffect, useState } from "react";
import ContentCard, { ContentCardProps } from "../components/ContentCard";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const resContent = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1vyaoL3cPm0ub2wOdszSASr6ItYDIHPb3a9Peay_ovfE/values/listContent?key=AIzaSyCt0PUL95MfEKFtYIStpPUs6iKbVLdGO9A"
      );
      const resContentDetail = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1vyaoL3cPm0ub2wOdszSASr6ItYDIHPb3a9Peay_ovfE/values/detailContent?key=AIzaSyCt0PUL95MfEKFtYIStpPUs6iKbVLdGO9A"
      );
      const contentDetail = (await resContentDetail.json()).values.map(
        (i: String[]) => ({
          key: i[0],
          img: i[1],
        })
      );

      const content = (await resContent.json()).values.map((i: String[]) => ({
        key: i[0],
        tag: i[1],
        publish_at: i[2],
        content: contentDetail.filter((ic: { key: String }) => ic.key === i[0]),
      }));

      setData(content);
    })();
  }, []);

  return (
    <Fragment>
      {data.map((item: ContentCardProps, index) => (
        <ContentCard key={index} {...item} />
      ))}
    </Fragment>
  );
};

export default Home;
