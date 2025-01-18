import { NextResponse } from "next/server";


const protectedRoutes = ["/links/", "/home", "/expense"];

export default async function middleware(req) {
  console.log("Middleware is working");

  
  

  try {    
    const cookie = await req.cookies.get("loggedInUser");
    
    
    const isProtected = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

    //testing
    // console.log("cookie : " + cookie)
    // console.log(typeof cookie)
    // console.log(false && true)
    // console.log(!cookie)
    // console.log(protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route)))
    // console.log(isProtected)

    if (!cookie && isProtected) {
      console.log("here:  " + cookie);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (e) {
    console.log('error in middleware.js  ' +e);
  }
  //.redirect(new URL('/', req.url))
  //await account.get();
  //.next();
  //return NextResponse.redirect(new URL('/', req.url))
  //const absoluteURL = new URL("/", req.nextUrl.origin);
  //return NextResponse.redirect(absoluteURL.toString());

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|^$).*)"],
};
