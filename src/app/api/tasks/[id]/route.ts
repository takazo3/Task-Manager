import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDb();
    const task = await TaskModel.findById(params.id);
    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Fetch success", task });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch task" },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";