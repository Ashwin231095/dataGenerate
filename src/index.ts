import { data } from "./data/salesforcegazerEvents";

import { writeFileSync, writeFile } from 'fs';
import {  gazerEvent } from "./util";
import { postActivity, createActivityApi } from "./helper";
import { createActivityActions } from "./data/data";
import { fewEventsMap } from "./data/salesForceData/fewEventsMatch";
import { eventsMapDiffusers } from "./data/salesForceData/eventsMatchDiffUsers";
import { financeData } from "./data/demoData/finance";
import { deliveryData } from "./data/demoData/delivery";
import { getData } from './data/demoData/na-sales/newUsers';


const file = process.env.fileName;
console.log('the file us', file);

const valueArray =  () => {
    // await postActivity(createActivityApi.url(8, 11), createActivityApi.payload('oppurtunity',createActivityActions.opportunityAction));
    let data = [];
    data.push(...gazerEvent(getData('nasales', 250, ["America/Vancouver"])));
    data.push(...gazerEvent(getData('apacsales', 150, ["Asia/Calcutta", "Asia/Shanghai", "Asia/Singapore"])));
    data.push(...gazerEvent(getData('emeasales', 200, ["Europe/Amsterdam", "Asia/Dubai"])));
    data.push(...gazerEvent(getData('delivery', 10, ["Asia/Calcutta", "Asia/Shanghai", "Asia/Singapore"])));
    data.push(...gazerEvent(getData('finance', 5, ["Asia/Calcutta", "Asia/Singapore"])));
    // console.log('the data is ', value);
    return data;
};

// console.log("the data us ",gazerEvent(data.allEventsMap)).then();
const aptyAdminPath = `../../../../Automation/apty-admin/server/loadtestdata/data/salesforceGazerEvents.json`
const localPath = '/salesforceGazerEvents.json'
writeFile(__dirname + localPath, JSON.stringify(valueArray()), (error)=> {
    console.log(error);
});
