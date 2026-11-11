import { NextRequest } from "next/server";
import { REVIEWS, getReviewsByConsultant, getConsultantByCode } from "@/lib/seed-data";
import { success, error } from "@/lib/api-response";

/**
 * GET /api/reviews
 * Returns reviews for a consultant with pagination.
 * Query: ?consultant_code=&page=&limit=
 * Returns: { response: "success", reviews: [...], total, page, per_page }
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const consultantCode = searchParams.get("consultant_code")?.trim();
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
    const perPage = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10) || 20));

    let result: { reviews: typeof REVIEWS; total: number };

    if (consultantCode) {
      result = getReviewsByConsultant(consultantCode, {
        limit: perPage,
        offset: (page - 1) * perPage,
      });
    } else {
      const allReviews = [...REVIEWS].sort(
        (a, b) => b.created_at.localeCompare(a.created_at)
      );
      result = {
        reviews: allReviews.slice((page - 1) * perPage, page * perPage),
        total: allReviews.length,
      };
    }

    return success({
      reviews: result.reviews,
      total: result.total,
      page,
      per_page: perPage,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}

/**
 * POST /api/reviews
 * Creates a review. Returns mock success when using seed data.
 * Body: { user_id, consultant_id, rating, content, tags? }
 * Returns: { response: "success", review_id: "mock-review-001" }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { user_id, consultant_id, rating, content, tags } = body as {
      user_id?: string;
      consultant_id?: string;
      rating?: number;
      content?: string;
      tags?: string;
    };

    if (!user_id) return error("user_id is required");
    if (!consultant_id) return error("consultant_id is required");
    if (rating == null) return error("rating is required");
    if (!content) return error("content is required");

    const ratingNum = Number(rating);
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
      return error("rating must be between 0 and 5");
    }

    // Validate consultant exists in seed data
    const consultant = getConsultantByCode(consultant_id);
    if (!consultant) {
      return error("Consultant not found");
    }

    return success({ review_id: "mock-review-001" });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}
