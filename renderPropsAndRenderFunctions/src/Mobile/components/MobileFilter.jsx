import React from "react";

import Layout from "@mobile/containers/Layout";
import MobileFilterItem from "@mobile/components/MobileFilterItem";

import "@styles/components/Config.styl";

const MobileFilter = () => {
  const filters = [
    {
      title: "All",
      classItem: "alt-config--filter--item",
      classButton: "alt-config--button alt-config--button__active",
    },
    {
      title: "Active",
      classButton: "alt-config--button",
      classItem: "alt-config--filter--item",
    },
    {
      title: "Completed",
      classButton: "alt-config--button",
      classItem: "alt-config--filter--item",
    },
  ];

  return (
    <Layout
      id="altFilters"
      layout="alt-config"
      container="alt-config--filter"
      render={(filter) => (
        <MobileFilterItem
          key={index}
          title={title}
          classItem={classItem}
          classButton={classButton}
        />
      )}
    />
  );
};

export default MobileFilter;
