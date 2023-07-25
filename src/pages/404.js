import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div>
      <img
        src="https://1.bp.blogspot.com/-W_8l-L7BARo/Xs0wlcD8GcI/AAAAAAAAJhQ/H5ztSXUAVYIKy2cEynjAOMd1M9qicizcgCLcBGAsYHQ/s1600/404.png"
        alt=""
        width="60%"
      />
    </div>
  );
};

export default ErrorPage;
