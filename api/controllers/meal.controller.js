import mealService from '../services/meal.services';

const mealController = {
    fetchAllMeals(req, res){
        const allMeals = mealService.fetchAllMeals();
        return res.json({
            status: "success",
            data:  allMeals

        }).status(200);
    },

     /**
      * @addMealController
         *Expect json of this format
         * {
         *  name:  "some food"
         *  size:  "large"
         * "price": "500"
         * }
         * 
    */

    addMeal(req, res){
        const newMeal = req.body;
        const createdMeal = mealService.addMeal(newMeal);
        return res.json({
            status: "success",
            data: createdMeal
        }).status(201);
    },

    getSingleMeal(req, res){
        const id = req.param.id;
        const foundMeal = mealService.getMeal(id);
        return res.json({
            status: "success",
            data: foundMeal
        }).status(201);
    }

}
export default mealController;