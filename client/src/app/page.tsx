import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="m-2 ">
        <Link href={"/simple/get"} className="btn btn-success m-2">
          Simple Get
        </Link>
        <Link href={"/simple/post"} className="btn btn-success mr-2">
          Simple Post
        </Link>
        <Link className="btn btn-success mr-2" href={"/simple/delete"}>
          Simple Delete
        </Link>
        <Link className="btn btn-success  mr-2" href={"/simple/put"}>
          Simple Put
        </Link>
      </div>
    </div>
  );
};

export default page;
