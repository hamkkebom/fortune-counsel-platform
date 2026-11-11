import { getConsultantsByCategory } from "@/lib/seed-data";

export async function POST(request) {
  try {
    const body = await request.json();
    const { offset = 0, limit = 10, cate = "call", order = "cematch", isGreen } = body;

    const result = getConsultantsByCategory(cate, {
      limit: Number(limit),
      offset: Number(offset),
      order,
      isGreen: isGreen === "Y",
    });

    return Response.json({
      response: "success",
      items: result.items,
      total: result.total,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Server error";
    return Response.json({ response: "error", msg: message, is_login: "false" }, { status: 500 });
  }
}
