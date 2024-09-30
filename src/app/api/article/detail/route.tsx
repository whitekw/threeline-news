import pool from "@app/_libs/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const articleId = Number(searchParams.get("article_id"));
    const db = await pool.getConnection();
    const query = `
      select
        title,
        content,
        image_url
      from article
      where article_id = ${articleId}
    `;

    const [rows] = await db.execute(query);
    db.release();

    return Response.json(rows);
  } catch (error) {
    return NextResponse.json({
      error: error
    }, { status: 500 });
  }
}