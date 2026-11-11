import { SERVICES } from "@/lib/seed-data";

export async function POST() {
  try {
    return Response.json({
      response: "success",
      items: SERVICES,
      total: SERVICES.length,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Server error";
    return Response.json({ response: "error", msg: message, is_login: "false" }, { status: 500 });
  }
}
