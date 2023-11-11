import { deleteCatatan } from "@/actions/action";
import prisma from "./db";
import Form from "@/components/Form";

export default async function Home() {
  const catatan = await prisma.catatan.findMany();

  return (
    <div className="max-w-5xl mx-auto mt-4 px-2">
      <div className="min-h-screen">
        <Form />
        <div className="flex flex-col w-full">
          {catatan.map((catatan) => (
            <form action={deleteCatatan}>
              <div
                key={catatan.id}
                className=" bg-white shadow-sm border border-gray-300 rounded-md overflow-hidden my-4"
              >
                <input type="hidden" name="id" value={catatan.id} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{catatan.title}</div>
                  <p className="text-gray-700 text-base">{catatan.content}</p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-500 text-sm">{`ID: ${catatan.id}`}</p>
                  <p className="text-gray-500 text-sm">{`Created At: ${catatan.createdAt}`}</p>
                </div>
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
