// templates/MinimalCV.tsx

import { forwardRef } from "react";

const MinimalCV = forwardRef<HTMLDivElement, { data: any }>(
  ({ data }, ref) => {
    return (
      <div ref={ref}>
        {/* your design */}
      </div>
    );
  }
);

export default MinimalCV;