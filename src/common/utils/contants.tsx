import blog1 from "@/assets/images/blog1.jpg";
import blog2 from "@/assets/images/blog2.jpg";
import blog3 from "@/assets/images/blog3.jpg";
import blog4 from "@/assets/images/blog4.jpg";
import blog5 from "@/assets/images/blog5.jpg";
import blog6 from "@/assets/images/blog6.jpg";

export type BlogType = {
  id: string,
  content: string,
  img: string
}

const blogs: BlogType[] = [
  {
    id: "blog1",
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    img: blog1.src
  },
  {
    id: "blog2",
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    img: blog2.src
  },
  {
    id: "blog3",
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    img: blog3.src
  },
  {
    id: "blog4",
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    img: blog4.src
  },
  {
    id: "blog5",
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    img: blog5.src
  },
  {
    id: "blog6",
    content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    img: blog6.src
  }
]

export default blogs;
