export class ExceptionError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ExceptionError.prototype);
    }

    messageLog() {
        return this.message;
    }
}