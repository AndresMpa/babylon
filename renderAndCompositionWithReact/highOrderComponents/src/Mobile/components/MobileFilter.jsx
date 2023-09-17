import React from "react";

import Layout from "@mobile/containers/Layout";
import MobileFilterItem from "@mobile/components/MobileFilterItem";

import "@styles/components/Config.styl";

const MobileFilter = () => {
  const filters = [
    {
      active: true,
      title: "All",
      classButton: "alt-config--button",
      classItem: "alt-config--filter--item",
    },
    {
      active: false,
      title: "Active",
      classButton: "alt-config--button",
      classItem: "alt-config--filter--item",
    },
    {
      active: false,
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
          classActive="alt-config--button__active"
        />
      )}
    />
  );
};

export default MobileFilter;
