import React from "react";

type caloriesDisplayProps = {
  calories: number;
  text: string;
};

export default function caloriesDisplay({
  calories,
  text,
}: caloriesDisplayProps) {
  return (
    <div className="">
      <p
        className={
          text == "Diferencia de calorias" && calories > 0
            ? "text-4xl font-black text-center text-red-500"
            : "text-4xl font-black text-center text-green-600"
        }
      >
        {calories}
      </p>
      <p className={"uppercase text-center text-2xl"}>{text}</p>
    </div>
  );
}
