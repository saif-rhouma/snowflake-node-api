const compareByStartTime = (a, b) => {
  if (a.START_TIME < b.START_TIME) {
    return -1;
  }
  if (a.START_TIME > b.START_TIME) {
    return 1;
  }
  return 0;
};

export { compareByStartTime };
