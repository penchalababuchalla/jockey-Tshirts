import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "./auth.service";



@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI4NjlkNTc1MS02OTUzLTQ5ODktOTY0ZS04YzZiNjAyNzk2ZTEiLCJhaWQiOiJDQUQ1MDU5MC1BMTg5LTQxNEYtQTJGNS0xMDMzOUQxRjlGOTciLCJkaWQiOiI0NDQ5NkIwMy0zNjQ3LTQ5MEMtQjJGMC0yRTE1OUIyN0QyNzgiLCJuYmYiOjE2NTE3MzQ4MzcsImV4cCI6MTY1MTgyMTIzNywiaWF0IjoxNjUxNzM0ODM3fQ.uN8kymPrOXGB2bQh9uKJe47ynn2dhDsiMd4RtWOlEQs';
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
