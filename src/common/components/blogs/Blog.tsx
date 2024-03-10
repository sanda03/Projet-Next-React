import Link from "next/link";
import { BlogType } from "@/common/utils/contants";

export enum ImageView {
  NONE,
  LINK,
  BIN
}

export function Blog({ blog, imageView }: { blog: BlogType, imageView: ImageView }) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="w-full rounded hover:scale-[1.02] transition cursor-pointer mx-auto my-2 max-w-[700px] p-5  bg-gray-800">
        <h1 className="font-bold text-[#f3f3f3]">
          {blog.id}
        </h1>
        <p className="text-white opacity-[.7]">{blog.content}</p>
        {imageView == ImageView.LINK && <Link href={`/blog/${blog.id}`}> {`/blog/${blog.id}/image`} </Link>}
        {imageView == ImageView.BIN && <img src={blog.img} />}
      </div>
    </Link>
  )
}
