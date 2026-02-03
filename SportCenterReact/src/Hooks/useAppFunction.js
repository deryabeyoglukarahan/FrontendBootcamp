import { useEffect } from "react";

export function useNavbarScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
      } else {
        navbar.classList.remove("navbar-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export function useHamburgerMenu() {
  useEffect(() => {
    const menuButton = document.getElementById("menu-hmbrgr");
    const menu = document.querySelector(".navbar ul");

    const toggleMenu = () => {
      menu.classList.toggle("show");
    };

    menuButton.addEventListener("click", toggleMenu);
    return () => menuButton.removeEventListener("click", toggleMenu);
  }, []);
}

export function calculateBMI() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const indicator = document.getElementById("bmi-indicator");

  const updateBMI = () => {
    const height = parseFloat(heightInput.value) / 100;
    const weight = parseFloat(weightInput.value);
    if (!height || !weight) return;
    const bmi = weight / (height * height);

    if (bmi < 18.5) indicator.style.left = "15%";
    else if (bmi < 24.9) indicator.style.left = "31.5%";
    else if (bmi < 29.9) indicator.style.left = "48%";
    else if (bmi < 34.9) indicator.style.left = "64%";
    else indicator.style.left = "80.5%";
  };

  heightInput.addEventListener("input", updateBMI);
  weightInput.addEventListener("input", updateBMI);
}
