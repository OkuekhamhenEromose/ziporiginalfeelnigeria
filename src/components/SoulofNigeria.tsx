import React from "react";
import PopularDestination from "./Destination/PopularDestination";
import FestivalGrid from "./Festival/FestivalGrid";
import DestinationTicket from "./Destination/DestinationTicket"

const SoulOfNigeria: React.FC = () => {
  return (
    <>
      <PopularDestination />
      <DestinationTicket/>
      <FestivalGrid />
    </>
  );
};

export default SoulOfNigeria;
