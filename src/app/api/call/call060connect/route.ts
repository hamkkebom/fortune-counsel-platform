import { NextRequest } from "next/server";
import { getConsultantByCode } from "@/lib/seed-data";
import { success, error } from "@/lib/api-response";

/**
 * POST /api/call/call060connect
 * Initiates a 060-call connection to a consultant.
 * Body: { it_code }
 * Returns: { response: "success", connect_number: "060-xxx-xxxx", consultation_id: "..." }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { it_code } = body as { it_code?: string };

    if (!it_code) {
      return error("it_code is required");
    }

    const consultant = getConsultantByCode(it_code);

    if (!consultant) {
      return error("Consultant not found");
    }

    const phone = consultant.it_connect_number || "010-0000-0000";
    const connectNumber = phone.replace(/^010/, "060");

    return success({
      connect_number: connectNumber,
      consultation_id: "mock-001",
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}
