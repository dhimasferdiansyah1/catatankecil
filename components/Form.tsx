"use client";

import { addCatatan } from "@/actions/action";
import { useRef } from "react";
import Button from "./Button";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await addCatatan(formData);
      }}
    >
      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-3/4 gap-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            className="bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mx-auto">
          <Button />
        </div>
      </div>
    </form>
  );
};

export default Form;
