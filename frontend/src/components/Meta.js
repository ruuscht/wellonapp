import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Välkommen till WellOn",
  description: "Vi säljer kläder för ditt välmående",
  keywords: "Lycka, Färg glatt, Kärlek",
};

export default Meta;
