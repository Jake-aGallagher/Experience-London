import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "There was an error connecting to the database";
  statusCode = 500;
  constructor() {
    super('DB connection error');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
