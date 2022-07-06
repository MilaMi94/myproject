import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Dessert, Delivered To You</h2>
      <p>
        Choose your favorite dessert from our broad selection of available
        desserts and enjoy a delicious snacks from the comfort of your home.
      </p>
      <p>
        From childhood treats to a grandparent's favorite recipes, beloved foods
        are deeply personal. Try versions that are dunked in dark chocolate,
        coated in a sweet layer of white chocolate, rolled in coconut and
        dressed up with spices -- it's among the world's most comforting snacks.
      </p>
    </section>
  );
};

export default MealsSummary;
