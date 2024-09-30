import pool from "@app/_libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await pool.getConnection();
    const query = `
      select
        article_id,
        category,
        title,
        image_url,
        date_format(origin_created_at, '%Y-%m-%d %H:%i') as origin_created_at
      from article
      order by origin_created_at desc, article_id desc`;
    const [rows] = await db.execute(query);
    db.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({
      error: error
    }, { status: 500 });
  }
}