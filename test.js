const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
}, []);

const toggleTheme = () => {
  const nextTheme = theme === "light" ? "dark" : "light";

  localStorage.setItem("theme", nextTheme);

  document.documentElement.setAttribute("data-bs-theme", nextTheme);

  setTheme(nextTheme);
};

return [theme, toggleTheme];
