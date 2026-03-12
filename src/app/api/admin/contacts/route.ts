import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getContacts, markAsRead, deleteContact } from "@/lib/contacts";

async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  return token && token.value.startsWith("Y2FyZWxvZy1hZG1pbjo"); // base64 of "carelog-admin:"
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  const contacts = getContacts();
  return NextResponse.json({ contacts });
}

export async function PATCH(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  const { id, action } = await request.json();

  if (action === "read") {
    markAsRead(id);
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "잘못된 요청" }, { status: 400 });
}

export async function DELETE(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  const { id } = await request.json();
  deleteContact(id);
  return NextResponse.json({ success: true });
}
