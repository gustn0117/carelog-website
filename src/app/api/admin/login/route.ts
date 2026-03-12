import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = "1234";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "비밀번호가 틀렸습니다" }, { status: 401 });
    }

    const token = Buffer.from(`carelog-admin:${Date.now()}`).toString("base64");

    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
