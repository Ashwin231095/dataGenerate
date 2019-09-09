import { data } from "./data/salesforcegazerEvents";

import { writeFileSync, writeFile } from 'fs';
import {  gazerEvent } from "./util";
import { postActivity, createActivityApi } from "./helper";
import { createActivityActions } from "./data/data";
import { fewEventsMap } from "./data/salesForceData/fewEventsMatch";
import { eventsMapDiffusers } from "./data/salesForceData/eventsMatchDiffUsers";


const file = process.env.fileName;
console.log('the file us', file);

const valueArray =  () => {
    // await postActivity(createActivityApi.url(8, 11), createActivityApi.payload('oppurtunity',createActivityActions.opportunityAction));
    const value = gazerEvent(data.incrementalEvents);
    console.log('the data is ', value);
    return value;
};

// console.log("the data us ",gazerEvent(data.allEventsMap)).then();

writeFile(__dirname +`../../../../Automation/apty-admin/server/loadtestdata/data/salesforceGazerEvents.json`, JSON.stringify(valueArray()), (error)=> {
    console.log(error);
});
