import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsInsights from "../../News/EditorsInsights/EditorsInsights";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-hbashar434.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <EditorsInsights>{{ xs: 1, md: 1, lg: 1 }}</EditorsInsights>
    </div>
  );
};

export default LeftNav;
