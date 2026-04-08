"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios/api";

export default function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/user/getAUser");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  return <div>{data && console.log(data)}</div>;
}
