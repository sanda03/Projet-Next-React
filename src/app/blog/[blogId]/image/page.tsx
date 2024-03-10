import { redirect } from "next/navigation";

import { Blog, ViewType } from "@/common/components/blogs";
import blogs from "@/common/utils/contants";

export default function ViewImageBlog({ params: { blogId } }: { params: { blogId: string } }) {
  const currentBlog = blogs.find(blog => blog.id === blogId);

  if (!currentBlog) {
    redirect("/404");
  }

  return <Blog blog={currentBlog} view={ViewType.SHOW_IMAGE} />
}
