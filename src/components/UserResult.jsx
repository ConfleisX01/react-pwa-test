import { useState, useEffect } from "react";
import { RESPONSES } from "../data/results";

export default function UserResult({ name, date }) {
  const [userHoros, setUserHoros] = useState(null);

  const calculate = () => {
    const dateCalculated = new Date(date);
    const day = dateCalculated.getDate();
    const month = dateCalculated.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "Tauro";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return "Géminis";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return "Cáncer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return "Escorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return "Sagitario";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return "Capricornio";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "Acuario";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return "Piscis";
    }
  };

  useEffect(() => {
    const RESULT = calculate();
    const result = RESPONSES.find((item) => item.signo === RESULT);
    console.log(result);
    setUserHoros(result);
  }, [date]);

  return (
    <>
      {userHoros != null ? (
        <div className="p-2 rounded my-2 flex items-center flex-col transition">
          <h2 className="text-2xl font-bold">
            Tu signo es: <span className="text-indigo-500">{userHoros.signo}</span>
          </h2>
          <div className="avatar my-4">
            <div className="w-64 rounded-xl">
              <img src={userHoros.img} alt="signo.png" />
            </div>
          </div>
          <p>{userHoros.fecha} - {userHoros.elemento}</p>
          <p>{userHoros.caracteristicas}</p>
          <p><span className="text-primary font-bold">{name}</span>: {userHoros.mensaje}</p>
        </div>
      ) : (
        <div className="p-2 rounded mx-2 flex items-center justify-center flex-col transition">
          <p className="text-4xl font-bold">Calculando</p>
        </div>
      )}
    </>
  );
}
