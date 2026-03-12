import { NextResponse } from "next/server";
import { addContact } from "@/lib/contacts";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { hospitalName, doctorName, phone, email, category, region, currentMarketing, message } = body;

    if (!hospitalName || !doctorName || !phone) {
      return NextResponse.json({ error: "필수 항목을 입력해주세요" }, { status: 400 });
    }

    const contact = addContact({
      hospitalName,
      doctorName,
      phone,
      email: email || "",
      category: category || "",
      region: region || "",
      currentMarketing: currentMarketing || "",
      message: message || "",
    });

    return NextResponse.json({ success: true, id: contact.id });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다" }, { status: 500 });
  }
}
