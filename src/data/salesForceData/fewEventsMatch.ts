import { Data } from "../jsonData";
import { salesforceTargetElements } from "../salesforcegazerEvents";


export const fewEventsMap: Data[] = [
    {
      timestamp: "2019-05-10T11:57:57.172Z", tenantId: 8,
      //This target is opportunity name in new opportunity pop up
      target: salesforceTargetElements.qualityPerformance
    },
    {
      timestamp: "2019-05-10T11:57:58.172Z", tenantId: 8,
      //This target is amount in new opportunity pop up
      target: salesforceTargetElements.assistance
    },
    {
      timestamp: "2019-05-10T11:57:59.172Z", tenantId: 8,
      //This target is probability in new opportunity pop up
      target: salesforceTargetElements.createOpportunityProbability
    },
    {
      timestamp: "2019-05-10T11:58:00.172Z", tenantId: 8,
      //This target is Description field in new opportunity pop up
      target: salesforceTargetElements.createOpportunityDescription
    },
  ];