import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";
  if (contact.length < 5) {
    return NextResponse.json({ ok: false, message: "请填写有效的联系方式。" }, { status: 400 });
  }
  return NextResponse.json({ ok: true, message: "预约信息已接收（演示接口，暂未写入数据库）。" });
}
