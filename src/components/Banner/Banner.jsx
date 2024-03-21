import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Banner.css';

const Banner = ({ content }) => {
  return (<article className="banner--container">
    <MdOutlineKeyboardArrowLeft />
    <p>{content}</p>
    <MdOutlineKeyboardArrowRight />
  </article>)
}

export default Banner;