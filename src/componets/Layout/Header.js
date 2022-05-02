import classes from './Header.module.css'

import mealsImage from '../../assets/meals.jpg'

export function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      {/* The sintax used in this className is different just because the name of the CSS class has a "-" on it. */}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Table with food'/>
      </div>
    </>
  )
}