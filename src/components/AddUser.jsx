import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loader";
import Button from "./Button";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";

const AddUser = ({ open, setOpen, userData }) => {
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userData || {},
  });

  const [addNewUser, { isLoading }] = useRegisterMutation();

  const handleOnSubmit = async (data) => {
    try {
      if (userData) {
        toast.info("Updating user... (Feature not implemented)");
      } else {
        const result = await addNewUser({ ...data, password: data.email }).unwrap();
        console.log("User Added:", result);
        toast.success("New user added successfully!");
      }

      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (error) {
      console.error("Add User Error:", error);
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Dialog.Title as="h2" className="text-base font-bold leading-6 text-gray-900 mb-4">
            {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
          </Dialog.Title>

          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Full name"
              type="text"
              name="name"
              label="Full Name"
              className="w-full rounded"
              register={register("name", { required: "Full name is required!" })}
              error={errors.name?.message}
            />
            <Textbox
              placeholder="Title"
              type="text"
              name="title"
              label="Title"
              className="w-full rounded"
              register={register("title", { required: "Title is required!" })}
              error={errors.title?.message}
            />
            <Textbox
              placeholder="Email Address"
              type="email"
              name="email"
              label="Email Address"
              className="w-full rounded"
              register={register("email", { required: "Email Address is required!" })}
              error={errors.email?.message}
            />
            <Textbox
              placeholder="Role"
              type="text"
              name="role"
              label="Role"
              className="w-full rounded"
              register={register("role", { required: "User role is required!" })}
              error={errors.role?.message}
            />
          </div>

          {isLoading ? (
            <div className="py-5">
              <Loading />
            </div>
          ) : (
            <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
              <Button
                type="submit"
                className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
                label="Submit"
              />
              <Button
                type="button"
                className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                onClick={() => setOpen(false)}
                label="Cancel"
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddUser;
