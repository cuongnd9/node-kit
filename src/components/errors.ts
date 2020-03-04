export class AppError extends Error {
    statusCode: number;
    error: string

    constructor(message: string) {
        super(message);
        this.statusCode = 500;
        this.error = 'Internal Server Error';
    }
}

export class BadRequest extends AppError {
    constructor(message: string) {
        super(message);
        this.statusCode = 400;
        this.error = 'Bad Request';
    }
}

export class Unauthorized extends AppError {
    constructor(message: string) {
        super(message);
        this.statusCode = 401;
        this.error = 'Unauthorized';
    }
}

export class Forbidden extends AppError {
    constructor(message: string) {
        super(message);
        this.statusCode = 403;
        this.error = 'Forbidden';
    }
}

export class NotFound extends AppError {
    constructor(message: string) {
        super(message);
        this.statusCode = 404;
        this.error = 'Not Found';
    }
}
