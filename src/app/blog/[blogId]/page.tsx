import { redirect } from "next/navigation";

import { Blog, BlogMenuList, ViewType } from "@/common/components/blogs";
import blogs from "@/common/utils/contants";

export default function ViewBlog({ params: { blogId } }: { params: { blogId: string } }) {
  const currentBlog = blogs.find(blog => blog.id === blogId);

  if (!currentBlog) {
    redirect("/404");
  }

  return (
    <div 
      className="flex ml-[300px] p-5 justify-center"
      style={{width: "calc(100% - 300px)"}}
    >
      <BlogMenuList />
      <Blog blog={currentBlog} view={ViewType.SHOW} />
    </div>
  )
}
