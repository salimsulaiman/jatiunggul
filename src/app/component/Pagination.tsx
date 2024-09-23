import React from "react";

function Pagination(props: { currentPage: number; totalPages: number; paginate: any }) {
  const { totalPages } = props;
  const { currentPage } = props;
  const { paginate } = props;

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="w-full flex gap-4 justify-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number
                ? "bg-slate-500 w-6 h-6 overflow-hidden flex items-center justify-center rounded-full text-white font-bold"
                : ""
            }`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
