import { NextRequest } from "next/server";
import { success } from "@/lib/api-response";

/**
 * POST /api/member/getappversion
 * Returns the current app version and device role.
 * Body: {} (optional, accepts any)
 * Returns: { response: "success", appVersion: "3.1", devicerole: null }
 */
export async function POST(_request: NextRequest) {
  return success({
    appVersion: "3.1",
    devicerole: null,
  });
}
