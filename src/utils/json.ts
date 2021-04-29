const json = <T>(json: T): JSON => {
  return JSON.parse(JSON.stringify(json));
};

export { json };
