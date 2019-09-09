import { Data } from "./data/jsonData";

export const gazerEvent =  (arrayData: Data[]) => {
  return arrayData.map((data) => {
      return {
          "_metadata": {
            "bundled": [
              "Segment.io"
            ],
            "unbundled": [
            ]
          },
          "anonymousId": "8ac68a59-6a5b-4c44-a7aa-34fdcb7d6a7d",
          "channel": "client",
          "context": {
            "ip": "183.82.96.113",
            "library": {
              "name": "analytics.js",
              "version": "3.8.2"
            },
            "page": {
              "path": "/_generated_background_page.html",
              "referrer": "",
              "search": "",
              "title": "",
              "url": "chrome-extension://hkgodhiolomddgkheigjonhompanmchh/_generated_background_page.html"
            },
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36"
          },
          "event": data.event || "User Action",
          "integrations": {},
          "messageId": "ajs-6e1653c833cc5afa83e81c11028c2de1",
          "originalTimestamp": "2019-06-15T11:57:58.480Z",
          "projectId": "f8Jnjz66Z1",
          "properties": {
            "actionType" : "click",
            "appSpecificData": {
              "createdDate": "2018-10-01T04:46:43.000Z",
              "department": "IT",
              "division": "DEV",
              "id": "0056F00000ASn0eQAD",
              "lastLoginDate": "2019-06-16T10:44:05.000Z",
              "profile": "System Administrator"
            },
            "browser": data.browser || "Chrome",
            "browserVersion": 75,
            "capturedBy": "stargazer",
            "device": "Desktop",
            "domain": "https://letznav-dev-ed.lightning.force.com",
            "extensionVersion": "1.0.0",
            "ip": "183.82.96.113",
            "isIframe": true,
            "language": "en-US",
            "messageType": 1,
            "os": "Linux",
            "pageTitle": "",
            "referrer": "https://letznav-dev-ed.lightning.force.com/lightning/setup/ConnectedApplication/page?address=%2Fapp%2Fmgmt%2Fforceconnectedapps%2FforceAppDetail.apexp%3FapplicationId%3D06P6F000000t3It%26sfdcIFrameOrigin%3Dhttps%253A%252F%252Fletznav-dev-ed.lightning.force.com%26clc%3D1%26appLayout%3Dsetup%26tour%3D%26sfdcIFrameHost%3Dweb%26nonce%3Da073002e1f98f5cade252200975f4bd421184dddfa09db88417666a2d5f15a13%26id%3D0Ci6F000000YqOm",
            "screenResolution": "1476 x 830",
            "sessionId": data.sessionId || "0d79d840-eecb-236d-d9cb-de52cc0f56fbs1",
            "tabId": 431,
            "tabIndex": 16,
            "target": data.target || null,
            "tenantId": data.tenantId || 0,
            "timestamp": data.timestamp,
            "timezone": data.timezone || "Asia/Calcutta",
            "url": "https://letznav-dev-ed.lightning.force.com/c/aptySalesforceIntegration.app",
            "urlPath": "/c/aptySalesforceIntegration.app",
            "urlQuery": "",
            "userId": data.userId || 'bc1b14bc-fe16-05f2-0fe8-645b3dd64ea3'
          },
          "receivedAt": "2019-06-19T11:57:58.612Z",
          "sentAt": "2019-06-20T11:57:58.481Z",
          "timestamp": "2019-06-21T11:57:58.611Z",
          "type": "track",
          "userId": 1,
          "version": 2
        }
  });
  };
