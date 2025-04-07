import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("men ishlamoqdaman!");

  const clonedReq = req.clone({
    setHeaders: { // Header berish
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZDlkYjRkZS1lYTExLTRiMzctYTllMy0xODM1ZjAwMzhkYjEiLCJpYXQiOjE3NDQwMDE1NzMsIlVzZXJOYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVGVhY2hlciIsInBlcm1pc3Npb25zIjoiWzEsMl0iLCJleHAiOjE3NDQxNzQzNzMsImlzcyI6IjEyNy4wLjAuMSIsImF1ZCI6Ik5ham90VGEnbGltT3F1dmNoaWxhcmkifQ.pR6JctrSz6qdUo0A1zjO6SIJdYM6ucc9ZVanVXnfSUA",
      CustomToken: "something"
    }
  });

  return next(clonedReq);
};
