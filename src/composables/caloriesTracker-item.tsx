import { useMemo } from "react";
import CaloriesDisplay from "./caloriesDisplay-item";
import { Activitys } from "../types/Type";

type CaloriesTrackerProps = {
  activities: Activitys[];
};

export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {
  const totalCalories = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category == 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const totalBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category == 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories= useMemo(()=>totalCalories-totalBurned,[activities])
  return (
    <div className="bg-black py-10 items-center ">
      <h1 className="text-4xl text-white mb-4 text-center">
        Contador de Calorías
      </h1>
      <div className="max-w-2xl mx-auto text-white flex justify-between items-center">
        <div>
          <CaloriesDisplay 
          calories={totalCalories}
          text={'Calorias Consumidas'}
          />
        </div>
        <div>
          <CaloriesDisplay 
          calories={netCalories}
          text={'Diferencia de calorias'}
          />
        </div>
        <div>
          <CaloriesDisplay 
          calories={totalBurned}
          text={'Calorias Quemadas'}
          />
        </div>
      </div>
    </div>
  );
}
