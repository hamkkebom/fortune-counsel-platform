import { NextRequest } from "next/server";
import { getConsultantByCode } from "@/lib/seed-data";
import { success, error } from "@/lib/api-response";

/**
 * POST /api/call/callconnect
 * Initiates a call connection to a consultant.
 * Body: { country_code, it_code, coupon_code? }
 * Returns: { response: "success", connect_number: "010-xxxx-xxxx", consultation_id: "..." }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { country_code, it_code, coupon_code } = body as {
      country_code?: string;
      it_code?: string;
      coupon_code?: string | null;
    };

    if (!it_code) {
      return error("it_code is required");
    }

    const consultant = getConsultantByCode(it_code);

    if (!consultant) {
      return error("Consultant not found");
    }

    const phone = consultant.it_connect_number || "010-0000-0000";
    const countryPrefix = country_code && country_code !== "82" ? `+${country_code}-` : "";
    const connectNumber = countryPrefix ? `${countryPrefix}${phone}` : phone;

    if (coupon_code) {
      // Coupon logic placeholder
    }

    return success({
      connect_number: connectNumber,
      consultation_id: "mock-001",
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}
