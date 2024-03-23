import './Banner.css';

const Banner = ({ content }) => {
  return (<article className="banner--container">
    <div>&lt;</div>
    <p>{content}</p>
    <div>&gt;</div>
  </article>)
}

export default Banner;