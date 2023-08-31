export { default } from "next-auth/middleware";

// Protect routes with the middleware
export const config = { matcher: ["/dashboard"] };