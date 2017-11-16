export class Request {
  method: string;
  data: {
    [x: string]: any;
  } = {};
  constructor(method: string) {
    this.method = method;
  }
}