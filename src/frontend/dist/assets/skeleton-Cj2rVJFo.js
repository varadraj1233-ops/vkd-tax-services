import { j as jsxRuntimeExports, p as cn } from "./index-Bc1U_hRv.js";
var RequestStatus = /* @__PURE__ */ ((RequestStatus2) => {
  RequestStatus2["awaitingAiApproval"] = "awaitingAiApproval";
  RequestStatus2["pending"] = "pending";
  RequestStatus2["completed"] = "completed";
  RequestStatus2["inProgress"] = "inProgress";
  RequestStatus2["aiRejected"] = "aiRejected";
  return RequestStatus2;
})(RequestStatus || {});
var ServiceType = /* @__PURE__ */ ((ServiceType2) => {
  ServiceType2["incomeTaxReturn"] = "incomeTaxReturn";
  ServiceType2["etdsReturn"] = "etdsReturn";
  return ServiceType2;
})(ServiceType || {});
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
export {
  RequestStatus as R,
  Skeleton as S,
  ServiceType as a
};
