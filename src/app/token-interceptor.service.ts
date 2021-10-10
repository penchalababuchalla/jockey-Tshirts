import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "./auth.service";



@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJhZTk5YmIyZC1lMjZiLTQ5MTgtYTY2Mi03YzczZjcxMDRmY2YiLCJhaWQiOiJDQUQ1MDU5MC1BMTg5LTQxNEYtQTJGNS0xMDMzOUQxRjlGOTciLCJkaWQiOiI0NDQ5NkIwMy0zNjQ3LTQ5MEMtQjJGMC0yRTE1OUIyN0QyNzgiLCJuYmYiOjE2MzM4NDI5ODAsImV4cCI6MTYzMzkyOTM4MCwiaWF0IjoxNjMzODQyOTgwfQ.oUtayWOOXJQlsYrps4MHax0D5LxWlgXtPcfbnKheR-A';
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
