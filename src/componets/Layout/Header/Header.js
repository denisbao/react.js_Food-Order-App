import { HeaderCartButton } from '../HeaderCardButton/HeaderCartButton'

import classes from './Header.module.css'
import meals_showcase_img from '../../../assets/meals-showcase.jpg'

export function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactDelivery</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={meals_showcase_img} alt='Table with food'/>
      </div>
    </>
  )
}