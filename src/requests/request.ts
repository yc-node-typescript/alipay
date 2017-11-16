export class Request {
  public method: string;
  public data: {
    [x: string]: any;
  } = {};
  constructor(method: string) {
    this.method = method;
  }
}
