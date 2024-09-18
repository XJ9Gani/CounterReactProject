import { useState, useEffect } from "react";

export default function useTheme() {
  const [state, setState] = useState(localStorage.getItem("state") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", state);
    localStorage.setItem("state", state);
  }, []);

  const handleState = () => {
    /*
   Тут я попытался сделать свой вариант не подсматривая в гитхаб . Впринцпе код работал , только разница была в том что отрабатывал на сразу и предыдущий state не сохронялся а брало значение по дэфолту. Посмотрел код понял в чем ошибка и исправил.   



   setState((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("state", state);
    document.documentElement.setAttribute("data-bs-theme", state);
    
    */

    const nextState = state === "light" ? "dark" : "light";
    localStorage.setItem("state", nextState);
    document.documentElement.setAttribute("data-bs-theme", nextState);
    setState(nextState);
  };

  return [state, handleState];
}
