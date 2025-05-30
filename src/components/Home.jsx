import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import MemeSearch from "./MemeSearch";
import Temp from "../Temp";
import Meme from "../Meme";
import Footer from "./Footer";
import "../style.css";
import "../index.css";

const Home = () => {
  const [temp, setTemp] = useState([]);
  const [meme, setMeme] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of memes to display per page

  

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.data.memes);
      });
  }, []);

  // Function to filter memes based on the search query
  const filteredMemes = temp.filter((meme) =>
    meme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the index of the last and first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMemes = filteredMemes.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredMemes.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Add this function to get visible page numbers
  const getVisiblePageNumbers = () => {
    const totalPages = Math.ceil(filteredMemes.length / itemsPerPage);
    const current = currentPage;
    const delta = 2; // Number of pages to show on each side
    
    let pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Calculate start and end pages
    let start = Math.max(2, current - delta);
    let end = Math.min(totalPages - 1, current + delta);
    
    // Add dots after first page if needed
    if (start > 2) {
      pages.push('...');
    }
    
    // Add middle pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    // Add dots before last page if needed
    if (end < totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    
    <div className="App">
      <Navbar setMeme={setMeme} />

      {meme === null ? (
        <>
          <MemeSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Temp temp={currentMemes} setMeme={setMeme} />
          <div className="pagination-container">
            <div className="pagination">
              <button
                className={`pagination-button prev-next ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Prev
              </button>

              {getVisiblePageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`dots-${index}`} className="pagination-dots">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`pagination-button page-number ${currentPage === page ? 'active' : ''}`}
                  >
                    {page}
                  </button>
                )
              ))}

              <button
                className={`pagination-button prev-next ${currentPage === Math.ceil(filteredMemes.length / itemsPerPage) ? 'disabled' : ''}`}
                onClick={nextPage}
                disabled={currentPage === Math.ceil(filteredMemes.length / itemsPerPage)}
              >
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* {navigate("/meme")}; */}
          <Meme meme={meme} setMeme={setMeme} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
