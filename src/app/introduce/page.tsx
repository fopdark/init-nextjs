import { getAbout } from "@/services/introduce";
import React from "react";

async function Introduce(props: any) {
  const data = await getAbout({});
  const htmlContent = { __html: data?.content || <p>Empty</p> };
  return (
    <div className=" dark:bg-gray-800 ">
      <div className="bg-gray-100 dark:bg-gray-800 py-8 max-w-[1200px] mx-auto py-0">
        {data && (
          <div
            className="p-5 ck-content text-black"
            dangerouslySetInnerHTML={htmlContent}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Introduce;
