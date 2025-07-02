# 🍽️ Recipe Discovery

A simple React application to browse and discover recipe categories using [TheMealDB API](https://www.themealdb.com/api.php).

![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## ✨ Features

✅ Fetches recipe categories from TheMealDB API  
✅ Displays categories with images and descriptions  
✅ Responsive layout with clean CSS styling  
✅ Routing to category pages

---

## 📸 Screenshots

![Recipe Discovery Screenshot](recipe-discovery/recipe-screenshot.png)




## 💡 Reflection

**Most Challenging Part:**  
Getting Tailwind CSS set up correctly was tricky, and I decided to remove it and switch to plain CSS for simpler configuration.

**Design Decision:**  
I structured the `useFetch` hook to return `{ data, loading, error }` so all components could handle loading and errors consistently without duplicating logic.


---

## 🚀 Installation & Usage

1️⃣ Clone the repository:

```bash
git clone https://github.com/callmesophiii/recipe-discovery.git
cd recipe-discovery
npm install
npm run dev
