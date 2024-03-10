import { BlogMenuList } from "@/common/components/blogs";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex ml-[300px] p-5 justify-center"
      style={{ width: "calc(100% - 300px)" }}
    >
      <BlogMenuList />
      {children}
    </div>
  )
}
