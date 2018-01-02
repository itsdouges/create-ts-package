declare module '*.json' {
  type JSONObject = {
    [key: string]: any;
  };

  const json: JSONObject;

  export = json;
}
