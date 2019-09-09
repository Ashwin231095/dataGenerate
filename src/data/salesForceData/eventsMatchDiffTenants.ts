import { Data } from "../jsonData";
import { salesforceTargetElements } from "../salesforcegazerEvents";

 //Same events with different tenantId

 export const eventsMapDiffTenant: Data[] = [
  {
    timestamp: "2019-05-10T11:57:57.172Z", tenantId: 8,
    //This target is opportunity name in new opportunity pop up
    target: salesforceTargetElements.qualityPerformance
  },
  {
    timestamp: "2019-05-10T11:57:59.172Z", tenantId: 8,
    //This target is amount in new opportunity pop up
    target: salesforceTargetElements.assistance
  },
  {
    timestamp: "2019-05-10T11:57:58.172Z",
    //This target is opportunity name in new opportunity pop up
    target: salesforceTargetElements.qualityPerformance
  },
  {
    timestamp: "2019-05-10T11:58:00.172Z",
    //This target is amount in new opportunity pop up
    target: salesforceTargetElements.assistance
  },
];