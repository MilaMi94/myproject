import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Apfelstrudel',
    description: 'For a floury lesson in gluten\'s architectural wonders, whip up a batch of traditional strudel dough. The real thing is stretched -- not rolled -- into an improbably thin sheet; according to legend, it should be transparent enough to read a newspaper through. Once extended, the delicate dough is wrapped around a sweet, apple filling that\'s enriched with buttery fried breadcrumbs, raisins and sometimes walnuts. The delicious result can be found in pastry shops around the world though Vienna provides the classic experience.',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Baklava',
    description: 'Dozens of delicate layers melt into a single tender bite in this syrupy confection, which is among the sweetest legacies of the Ottoman Empire. While it remains a sought-after treat through the Levant, Balkans, the Caucasus and North Africa -- regions that were once ruled from Constantinople -- the spiritual home of baklava is surely the modern-day country of Turkey. There, pastry shops serve great trays sliced into diamonds, filled with ground nuts and dripping with honeyed syrup. This is just the most famous of the Ottoman Empire\'s syrup-soaked pastries, but it\'s snagged the limelight for good reason. With a simple list of ingredients and endless variations, it easily ranks among the world\'s most tempting treats.',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Black Forest Cake',
    description: 'Along with fairy tales and mountain-top castles, Germany\'s Black Forest region is known as the namesake -- if not the origin -- of the country\'s most luscious cake. Dark rounds of chocolate cake are doused in a cherry syrup spiked with kirschwasser, a sour cherry brandy, then stacked atop a thin, chocolate base with deep layers of whipped cream and fresh cherries. If that wasn\'t flavor enough, the whole thing is swathed in more cream, dusted with shaved chocolate and studded with cherries. The resulting cake is a frothy dream dessert that\'s the star of pastry cases around Germany, where it\'s known as a Schwarzwälder Kirschtorte.',
    price: 12.99,
    
  },
  {
    id: 'm4',
    name: 'Cannoli',
    description: 'A shattering-crisp shell gives way to a creamy cheese filling in this Sicilian classic, whose roots reach deep into the island\'s diverse culinary history. With origins at the wild Carnival celebrations at Palermo, the traditional cannolo is filled with silky-smooth ricotta cheese made from sheep\'s milk. Taste that rich filling for evidence of the Arab influence that infuses Sicilian cuisine: The candied citrus that often flavors the creamy interior remains beloved throughout the Middle East.',
    price: 18.99,
  },
];

console.log(DUMMY_MEALS);
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
