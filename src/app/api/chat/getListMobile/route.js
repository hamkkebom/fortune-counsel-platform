import { CONSULTANTS } from "@/lib/seed-data";

export async function POST(request) {
  try {
    const body = await request.json();
    const { offset = 0, limit = 10, order = "cematch", isGreen } = body;

    let filtered = CONSULTANTS.filter((c) => c.it_code.startsWith("CH-"));

    if (isGreen === "Y") {
      filtered = filtered.filter((c) => c.it_coin_price <= 1200);
    }

    switch (order) {
      case "itemNew":
        filtered.sort((a, b) => (a.it_new === "Y" ? -1 : 1));
        break;
      case "recent":
        filtered.sort((a, b) => b.consult_count - a.consult_count);
        break;
      case "calling":
        filtered.sort((a, b) => (a.status === "on" ? -1 : 1));
        break;
      default:
        filtered.sort((a, b) => b.rating_avg - a.rating_avg);
        break;
    }

    const items = filtered.slice(offset, offset + limit);
    return Response.json({ response: "success", items, total: filtered.length });
  } catch (e) {
    return Response.json({ response: "error", msg: e instanceof Error ? e.message : "Server error", is_login: "false" });
  }
}
