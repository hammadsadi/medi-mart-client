"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import uploadImage from "@/utils/uploadImageToCloudinary";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
const CreateProject = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const form = useForm();
  // Handle Submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const {
      title,
      description,
      image,
      projectFeatures,
      technologies,
      fronEndGithub,
      backendEndGithub,
      projectLiveLink,
    } = data;
    if (
      !title ||
      !description ||
      !image ||
      !projectFeatures ||
      !technologies ||
      !fronEndGithub ||
      !backendEndGithub ||
      !projectLiveLink
    ) {
      return toast.error("All Fields Are Requied");
    }
    const imgUrl = await uploadImage(data?.image);
    const projectInfo = {
      title,
      description,
      image: imgUrl,
      userEmail: session?.user?.email,
      projectFeatures,
      technologies,
      fronEndGithub,
      backendEndGithub,
      projectLiveLink,
    };
    console.log(projectInfo);
    const res = await fetch(
      "https://portfolio-api-opal.vercel.app/api/v1/project/create-project",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectInfo),
      }
    );
    const blogData = await res.json();
    if (blogData?.data) {
      router.push("/dashboard/projects");
      return toast.success("Project Created Successful");
    } else {
      toast.error("Failed to Create Project");
    }
  };

  return (
    <div className={`${session?.user ? "flex-1 md:ml-[270px]" : ""}`}>
      <div className="max-w-lg mx-auto p-4 border">
        <div>
          <h2 className="text-xl md:text-2xl text-center">
            Create New Project
          </h2>
        </div>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div></div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description/Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Project Features ( Each Features Separated by Comma )
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Technologies ( Each Technologies Separated by Comma )
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fronEndGithub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Front End Github Link</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="backendEndGithub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Backend End Github Link</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectLiveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Live Link</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                      value={value?.fileName}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Create</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateProject;
