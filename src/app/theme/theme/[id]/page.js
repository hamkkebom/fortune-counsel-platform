export default async function ThemePage({ params }) {
  const { id } = await params;
  return (
    <main className="min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">테마</h1>
      <p className="text-[1.6rem] text-[#666]">테마 ID: {id}</p>
    </main>
  );
}
