import React from "react";

function Detail(props: { data: any }) {
  const { data } = props;

  return (
    <div className=" dark:bg-gray-800 ">
      <div className="bg-gray-100 dark:bg-gray-800 py-8 max-w-[1200px] mx-auto py-0">
        <div className="px-5 ck-content" dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>
    </div>
  );
}

export default Detail;
