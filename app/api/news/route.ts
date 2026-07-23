import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    items: [
      { id: 1, title: "怀旧服预约现已开放", date: "即将公布", category: "开服计划" },
      { id: 2, title: "经典舞台与原版节奏体验回归", date: "开发中", category: "版本还原" },
      { id: 3, title: "玩家社区与老友召集计划", date: "筹备中", category: "社区" }
    ]
  });
}
