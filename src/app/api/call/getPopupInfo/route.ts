import { NextRequest } from "next/server";
import { getConsultantByCode } from "@/lib/seed-data";
import { success, error } from "@/lib/api-response";

/**
 * GET/POST /api/call/getPopupInfo
 * Returns consultant popup info for the call popup.
 * Params: it_code (query or body)
 */
export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}

async function handleRequest(request: NextRequest) {
  try {
    let it_code: string | undefined;

    if (request.method === "GET") {
      const { searchParams } = new URL(request.url);
      it_code = searchParams.get("it_code") ?? undefined;
    } else {
      const body = await request.json().catch(() => ({}));
      it_code = (body as { it_code?: string }).it_code;
    }

    if (!it_code) {
      return error("it_code is required");
    }

    const consultant = getConsultantByCode(it_code);

    if (!consultant) {
      return error("Consultant not found");
    }

    return success({
      it_nick: consultant.it_nick,
      it_coin_price: consultant.it_coin_price,
      it_category_name: consultant.it_category_name,
      it_style_key: consultant.it_style_key,
      it_counsel_key: consultant.it_counsel_key,
      it_profile_text: consultant.it_profile_text,
      rating_avg: consultant.rating_avg,
      consult_count: consultant.consult_count,
      status: consultant.status,
      profile_images: consultant.profile_images,
      tags: consultant.tags.map((t) => `#${t}`),
      it_connect_number: consultant.it_connect_number,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}
