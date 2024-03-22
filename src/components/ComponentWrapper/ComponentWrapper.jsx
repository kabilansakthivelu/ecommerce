import './ComponentWrapper.css';

const ComponentWrapper = ({ children }) => {
  return <div className="container">{children}</div>
}

export default ComponentWrapper;