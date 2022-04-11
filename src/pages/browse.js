import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hook";
import { selectionFilter } from "../utils";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides}></BrowseContainer>;
};

export default Browse;
