import Link from "next/link";

import React from "react";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)",
    },
    {
      _id: 2,
      title: "Is it only me or the font is bolder than necessary",
    },
    {
      _id: 3,
      title: "Redux Toolkit Not Updating State as Expected",
    },
    {
      _id: 4,
      title: "Can I get the course for free",
    },
    {
      _id: 5,
      title: "Async/Await Function Not Handling Errors Properly",
    },
  ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div className="">
        <h3 className="h3-bold text-dark200_light900 font-inter ">
          Top Question
        </h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          <Link></Link>
        </div>
      </div>
      <div className="mt-16"> test 2</div>
    </section>
  );
};

export default RightSidebar;
