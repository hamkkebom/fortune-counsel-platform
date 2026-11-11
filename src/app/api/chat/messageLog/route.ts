import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { success, error } from "@/lib/api-response";

/**
 * POST /api/chat/messageLog
 * Saves a chat message to the database.
 * Body: { message, room_code }
 * Returns: { response: "success" }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { message, room_code } = body as {
      message?: string;
      room_code?: string;
    };

    if (!message) {
      return error("message is required");
    }

    if (!room_code) {
      return error("room_code is required");
    }

    // Find the chat room by id (room_code maps to ChatRoom.id)
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: room_code },
    });

    if (!chatRoom) {
      return error("Chat room not found");
    }

    // For now, use the first participant as the sender
    // In production, this would use the authenticated user's ID
    const participant = await prisma.chatParticipant.findFirst({
      where: { chatRoomId: room_code },
      orderBy: { joinedAt: "asc" },
    });

    const senderId = participant?.userId ?? "system";

    // Save the message
    await prisma.chatMessage.create({
      data: {
        chatRoomId: room_code,
        userId: senderId,
        content: message,
        type: "text",
      },
    });

    return success({});
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return error(message);
  }
}
