export async function GET() {
  const res = {
    title: "제목",
    contents: "본분"
  };

  return Response.json(res);
}