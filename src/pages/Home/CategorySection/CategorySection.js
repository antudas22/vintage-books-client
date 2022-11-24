import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 mt-20">
        <div>
      <div className="card bg-green-200 shadow-xl">
        <div className="card-body">
          <Link><h2 className="text-2xl font-semibold text-center">Detective And Mystery</h2></Link>
        </div>
      </div>
    </div>
    <div>
      <div className="card bg-blue-200 shadow-xl">
        <div className="card-body">
          <Link><h2 className="text-2xl font-semibold text-center">Horror</h2></Link>
        </div>
      </div>
    </div>
    <div>
      <div className="card bg-orange-200 shadow-xl">
        <div className="card-body">
          <Link><h2 className="text-2xl font-semibold text-center">Historical Fiction</h2></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CategorySection;
