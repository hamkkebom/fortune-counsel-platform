import { NextResponse } from "next/server";

/**
 * Success response wrapper
 */
export function success(data: Record<string, unknown> = {}) {
  return NextResponse.json({ response: "success", ...data });
}

/**
 * Error response wrapper
 */
export function error(msg: string, status = 200) {
  return NextResponse.json(
    { response: "error", msg, is_login: "false" },
    { status }
  );
}
