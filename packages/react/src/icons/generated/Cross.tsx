import * as React from "react";
import type { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.714 2.104a.75.75 0 0 0-.55 1.062c.037.079.794.847 3.66 3.717L9.44 10.5l-3.614 3.617c-2.867 2.87-3.624 3.638-3.661 3.717a.76.76 0 0 0 .148.854.76.76 0 0 0 .854.148c.079-.037.847-.794 3.717-3.661l3.617-3.614 3.617 3.614c2.87 2.867 3.638 3.624 3.717 3.66a.77.77 0 0 0 .854-.147.77.77 0 0 0 .148-.854c-.037-.079-.794-.847-3.66-3.717L11.56 10.5l3.614-3.617c2.867-2.87 3.624-3.638 3.661-3.717a.76.76 0 0 0-.148-.854.76.76 0 0 0-.854-.148c-.079.037-.847.794-3.717 3.66L10.5 9.44 6.893 5.836C4.91 3.854 3.253 2.213 3.213 2.19a.76.76 0 0 0-.5-.086"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCross;
