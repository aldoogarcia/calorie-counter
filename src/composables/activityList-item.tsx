import { useMemo } from "react";
import { Activitys } from "../types/Type";
import { categories } from "../data/data";
import { ActivityAction } from "../reducers/activity-reducer";
import { PencilSquareIcon,XCircleIcon } from "@heroicons/react/24/solid";
type ActivityListProps = {
  activity: Activitys[];
  dispatch: React.Dispatch<ActivityAction>;
};

export default function ActivityList({
  activity,
  dispatch,
}: ActivityListProps) {
  const categorieName = useMemo(
    () => (category: Activitys["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : "")),
    [activity]
  );
  return (
    <>
      <div className="max-w-2xl mx-auto flex justify-between">
        <div className=" w-full">
          {activity.map((act) => (
            <div
              key={act.id}
              className="flex justify-between bg-white mt-5 py-5 shadow-lg"
            >
              <div className="relative space-y-3 mt-4 mx-5">
                <p
                  className={`absolute -top-7 -left-10 px-6 ${
                    act.category == 1 ? "bg-orange-600" : "bg-green-500"
                  } px-2 py-1`}
                >
                  {categorieName(act.category)}
                </p>
                <p className="text-3xl uppercase">{act.name}</p>
                <p className="text-7xl text-lime-500 font-black mx-10">
                  {act.calories}
                </p>
              </div>
              <div className=" flex gap-5 items-center mx-3">
                <button onClick={()=> dispatch({type:"set-activity",payload:{id:act.id}})}>
                  <PencilSquareIcon className="w-8 h-8 text-gray-400" />
                </button>
                <button onClick={()=> dispatch({type:'delete-activity',payload:{id:act.id}})}>
                  <XCircleIcon className="w-8 h-8 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
