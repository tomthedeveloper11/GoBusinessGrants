import { CheckboxIcon } from "@radix-ui/react-icons";
import React from "react";

const EligibilityCard = ({ children }: any) => {
  return (
    <div className="p-2 border border-1 rounded-md flex flex-row">
      <CheckboxIcon />
      {children}
    </div>
  );
};

export default EligibilityCard;
