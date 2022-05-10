import classes from './MealsSummary.module.css'

export function MealsSummary() {
  console.log('MealsSummary is running...')
  return (
    <section className={classes.summary}>
      <h2>Comida, você irá precisar.</h2>
      <p>
        Escolha sua comida favorita de nossa lista de refeições disponíveis e
        se delicie com uma comida bem ok.
      </p>
      <p>
        Todas nossas refeições são feitas com ingredintes descentes, em tempo até
        que razoável, por pessoas minimamente treinadas.
      </p>
    </section>
  )
}
