import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css'
 

const Loader = () => (
  <div className={css.container}>
    <Triangle
    height="80"
    width="80"
    color="black"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
  </div>
 
);

export default Loader