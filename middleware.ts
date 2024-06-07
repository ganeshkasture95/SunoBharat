import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)','/sign-up(.*)','/'
]);


// routs like creatin and publishing podcasts are protectes 
// only loged in user will be able to navigate to it

export default clerkMiddleware((auth, req) => {
    if(!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};