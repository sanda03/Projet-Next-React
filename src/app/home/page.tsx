import { Blog, ImageView } from "@/common/components/blogs"
import blogs from "@/common/utils/contants"

export default function Home() {
  return (
    <main className="w-full py-5 bg-[#f3f3f3]">
      {blogs.map(blog => <Blog key={blog.id} blog={blog} imageView={ImageView.NONE} />)}
    </main>
  )
}
