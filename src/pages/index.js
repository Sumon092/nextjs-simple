import React from "react";
import RootLayout from "../../component/layout/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
