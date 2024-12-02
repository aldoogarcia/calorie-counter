import { v4 as uid4 } from "uuid";
import { categories } from "../data/data";
import { Dispatch, useEffect, useState } from "react";
import { ActivityAction, ActivitiesType } from "../reducers/activity-reducer";
import { Activitys } from "../types/Type";

type FormProps = {
  dispatch: Dispatch<ActivityAction>;
  state: ActivitiesType;
};

export default function Form({ dispatch, state }: FormProps) {
  const INITIAL_STATE: Activitys = {
    id: uid4(),
    category: 1,
    name: "",
    calories: 0,
  };
  const [activity, setActivity] = useState(INITIAL_STATE);

  useEffect(() => {
    if (state.activitieID) {
      const filterActivitie = state.activities.filter(
        (stateActivitie) => stateActivitie.id === state.activitieID
      )[0];
      setActivity(filterActivitie);
    }
  }, [state.activitieID]);

  const handlerChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const isNumber = ["calories", "category"].includes(e.target.id);
    setActivity({
      ...activity,
      [e.target.id]: isNumber ? +e.target.value : e.target.value,
    });
  };

  const isActivity = () => {
    const { calories, name } = activity;
    const isThis = name.trim() != "" && calories > 0;
    if (isThis) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({
      ...INITIAL_STATE,
      id: uid4(),
    });
  };

  return (
    <div className="pt-10">
      <div className="w-full grid grid-cols-1 bg-green-200 p-20 max-w-4xl mx-auto shadow-xl rounded-xl">
        <form className="">
          <div className="grid grid-cols-1">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={activity.category}
              onChange={handlerChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <label htmlFor="name">Actividad</label>
            <input
              value={activity.name}
              onChange={handlerChange}
              id="name"
              className="rounded-md"
              type="text"
              name="name"
            />
          </div>

          <div className="grid grid-cols-1">
            <label htmlFor="calories">Calorias</label>
            <input
              value={activity.calories}
              onChange={handlerChange}
              className="rounded-md"
              id="calories"
              type="number"
              name="name"
            />
          </div>
          <input
            disabled={!isActivity()}
            value={activity.category==1?'Guadar Comida':'Guardar Ejercicio'}
            className="cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed w-full bg-gray-700 text-white font-medium mt-3 rounded-md py-3"
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
