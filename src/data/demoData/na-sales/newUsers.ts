export const getData = (segmentValue, noOfUsers, region) => {
  const minDate = new Date(2019, 6, 17, 6, -30);
  const maxDate = new Date(2019, 8, 17, 6, -30);

  let a = [];
  const browser = ["Chrome", "FireFox", "Internet Explorer"];
  const getBrowser = (i) => {
    if (i % 2 === 0) {
      return 'Chrome';
    } else if (i % 3 === 0) {
      return 'Firefox'
    } else if (i % 7 === 0) {
      return 'Internet Explorer'
    }
    return 'Chrome';
  }

  let iteratorDate = minDate;

  const getRandomNumber = (num) => Math.floor(Math.random() * num) + 1;
  const userIds = [];
  for (let i = 1; i <= noOfUsers; i++) {
    userIds.push(`user-${i}`);
  }

  while (iteratorDate <= maxDate) {
    const halfUsers = (noOfUsers / 2);
    const min = Math.floor(Math.random() * halfUsers);
    const max= Math.floor(Math.random() * halfUsers) + halfUsers;
    for (let i = min; i < max; i++) {
      const currentBrowser = getBrowser(i);
      const suffix = `${iteratorDate.getMonth() + 1}-${iteratorDate.getDate()}`;
      const userId = i > halfUsers ? 'greater' + userIds[i]: userIds[i];
      a.push(
        {
          event: i % 8 === 0 ? 'Error Event' : null,
          userId: userId,
          timestamp: iteratorDate.toISOString(),
          department: segmentValue,
          tenantId: 17,
          sessionId: `session-${suffix}`,
          browser: currentBrowser,
          timezone: region[Math.floor(Math.random() * region.length)]
        },
        {
          userId: userId,
          timestamp: new Date(iteratorDate.getTime() + getRandomNumber(Math.floor(Math.random() * 240) + 1) * 60 * 1000).toISOString(),
          department: segmentValue,
          tenantId: 17,
          sessionId: `session-${suffix}`,
          browser: currentBrowser,
          timezone: region[Math.floor(Math.random() * region.length)]
        }
      );
    }
    iteratorDate = new Date(iteratorDate.getTime() + 86400 * 1000);
  }
  return a;
}

