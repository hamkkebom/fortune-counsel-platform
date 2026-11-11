import { NextRequest } from "next/server";
import { getConsultantByCode, getReviewsByConsultant } from "@/lib/seed-data";
import { success, error } from "@/lib/api-response";

/**
 * GET /api/consultants/[id]
 * Returns a single consultant with full profile and reviews.
 * Returns: { response: "success", consultant: { ... }, reviews: [...] }
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return error("Consultant id is required");
    }

    const consultant = getConsultantByCode(id);

    if (!consultant) {
      return error("Consultant not found");
    }

    const { reviews, total: reviewTotal } = getReviewsByConsultant(id, { limit: 50, offset: 0 });

    return success({
      consultant: {
        id: consultant.it_code,
        name: consultant.it_nick,
        nickname: consultant.it_nick,
        category: consultant.it_category_name,
        category_code: consultant.it_category_code,
        price_per_30s: consultant.it_coin_price,
        rating: consultant.rating_avg,
        review_count: reviewTotal,
        consult_count: consultant.consult_count,
        status: consultant.status,
        intro: consultant.it_profile_text,
        profile_image: consultant.it_main_pic || "",
        tags: consultant.tags,
      },
      reviews: reviews.map((r) => ({
        id: r.id,
        rating: r.rating,
        content: r.content,
        tags: r.tags,
        created_at: r.created_at,
        user: {
          nickname: r.user_nickname,
          image: "",
        },
      })),
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}
