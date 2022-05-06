import { HeaderCartButton } from '../HeaderCardButton/HeaderCartButton'

import classes from './Header.module.css'
import mealsImage from '../../../assets/meals.jpg'

export function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactDelivery</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Table with food'/>
      </div>
    </>
  )
}