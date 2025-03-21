import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Simple mobile detection
  const userAgent = request.headers.get("user-agent") || ""
  const isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))

  // Only redirect on homepage and if mobile
  if (request.nextUrl.pathname === "/" && isMobile) {
    return NextResponse.redirect(new URL("/mobile", request.url))
  }

  return NextResponse.next()
}

// Only run middleware on home route
export const config = {
  matcher: "/",
}

