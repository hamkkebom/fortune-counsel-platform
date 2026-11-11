import { NextRequest } from "next/server";
import { getConsultantsByCategory } from "@/lib/seed-data";
import { success, error } from "@/lib/api-response";

/**
 * GET /api/consultants
 * Returns a paginated, filtered list of consultants.
 * Query: ?category=&sort=&page=&limit=
 * Returns: { response: "success", consultants: [...], total, page, per_page }
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category")?.trim() || "call";
    const sort = searchParams.get("sort")?.trim() || "cematch";
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
    const perPage = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10) || 20));

    const result = getConsultantsByCategory(category, {
      limit: perPage,
      offset: (page - 1) * perPage,
      order: sort,
    });

    return success({
      consultants: result.items,
      total: result.total,
      page,
      per_page: perPage,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}
