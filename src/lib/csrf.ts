import { NextRequest, NextResponse } from "next/server";

/**
 * Simple CSRF validation for API routes.
 * Checks that the Origin or Referer header matches the host.
 * Returns true if valid, false otherwise.
 */
export function validateCSRF(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const host = request.headers.get("host");

  if (!host) return false;

  // Allow if origin matches host
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      if (originHost === host) return true;
    } catch {
      // Invalid origin URL
    }
  }

  // Allow if referer matches host
  if (referer) {
    try {
      const refererHost = new URL(referer).host;
      if (refererHost === host) return true;
    } catch {
      // Invalid referer URL
    }
  }

  // Allow requests without origin/referer (server-to-server, mobile apps)
  if (!origin && !referer) return true;

  return false;
}

/**
 * Returns a standard CSRF error response.
 */
export function csrfError() {
  return NextResponse.json(
    { response: "error", msg: "CSRF token mismatch", is_login: "false" },
    { status: 403 }
  );
}
