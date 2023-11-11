"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const addCatatan = async (formData: FormData) => {
  "use server";

  const title = formData.get("title");
  const content = formData.get("content");

  await prisma.catatan.create({
    data: {
      title: title as string,
      content: content as string,
    },
  });
  revalidatePath("/");
};

export const deleteCatatan = async (formData: FormData) => {
  "use server";
  const id = formData.get("id");

  await prisma.catatan.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/");
};
