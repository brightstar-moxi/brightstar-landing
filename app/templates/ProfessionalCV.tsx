// templates/ProfessionalCV.tsx

import { forwardRef } from "react";

const ProfessionalCV = forwardRef<HTMLDivElement, { data: any }>(
  ({ data }, ref) => {
    return (
      <div ref={ref}>
        {/* your design */}
      </div>
    );
  }
);

export default ProfessionalCV;