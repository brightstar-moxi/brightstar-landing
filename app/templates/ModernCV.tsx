// templates/ModernCV.tsx

import { forwardRef } from "react";

const ModernCV = forwardRef<HTMLDivElement, { data: any }>(
  ({ data }, ref) => {
    return (
      <div ref={ref}>
        {/* your design */}
      </div>
    );
  }
);

export default ModernCV;