
export interface Data {
    browser?: string;
    department?: string;
    event?: string;
    errorText?: string;
    origin?: string;
    target?: object;
    tenantId?: number;
    timestamp: string;
    timezone?: string;
    type?: string;
    sessionId?: string;
    userId?: string;
}

// some bull shit
export const jsonDataForNewUsers: Data[] = [
    // 2 unique user events daily
    { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea3", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", browser: "Chrome", timestamp: "2019-05-10T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea4", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", browser: "Chrome", timestamp: "2019-05-10T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea3", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", browser: "Chrome", timestamp: "2019-05-11T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea4", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", browser: "Chrome", timestamp: "2019-05-11T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea5", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", browser: "Chrome", timestamp: "2019-05-13T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea6", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", browser: "Chrome", timestamp: "2019-05-13T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea7", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", browser: "Chrome", timestamp: "2019-05-13T11:57:57.172Z" },
    // // Timezone to usa
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea3", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "America/New_York", timestamp: "2019-05-10T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea4", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "America/New_York", timestamp: "2019-05-10T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea3", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "America/New_York", timestamp: "2019-05-11T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea4", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "America/New_York", timestamp: "2019-05-11T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea5", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "America/New_York", timestamp: "2019-05-13T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea6", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "America/New_York", timestamp: "2019-05-13T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea7", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "America/New_York", timestamp: "2019-05-13T11:57:57.172Z" },
    // // Timezone to japan
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea3", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "Asia/Tokyo", timestamp: "2019-05-10T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea4", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "Asia/Tokyo", timestamp: "2019-05-10T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea3", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "Asia/Tokyo", timestamp: "2019-05-11T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea4", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "Asia/Tokyo", timestamp: "2019-05-11T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea5", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "Asia/Tokyo", timestamp: "2019-05-13T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea6", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "Asia/Tokyo", timestamp: "2019-05-13T11:57:57.172Z" },
    // { userId: "bc1b14bc-fe16-05f2-0fe8-645b3dd64ea7", sessionId: "ffb0de68-e0a2-32a6-878b-e25418e91d8a", event: "User Action", timezone: "Asia/Tokyo", timestamp: "2019-05-13T11:57:57.172Z" },

];






export const data = {
    newUsers: jsonDataForNewUsers,
};
