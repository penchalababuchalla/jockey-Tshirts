import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "./auth.service";



@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIxM2M4ZDU4NC1iZjFiLTRmY2ItYjM1NS0zYzhjMzU0ODc0MDAiLCJhaWQiOiJDQUQ1MDU5MC1BMTg5LTQxNEYtQTJGNS0xMDMzOUQxRjlGOTciLCJkaWQiOiI0NDQ5NkIwMy0zNjQ3LTQ5MEMtQjJGMC0yRTE1OUIyN0QyNzgiLCJuYmYiOjE2MzQwOTcwOTcsImV4cCI6MTYzNDE4MzQ5NywiaWF0IjoxNjM0MDk3MDk3fQ.0ZprOp8PEOzFo2ESKzE20M0eLUMyv5jRf86zPCZoxIc';
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
