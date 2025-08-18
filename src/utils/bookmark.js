// Get all bookmarks
export const getBookmarks = () => {
  const saved = localStorage.getItem("bookmarks");
  return saved ? JSON.parse(saved) : [];
};

// Add new bookmark
export const addBookmark = (job) => {
  const bookmarks = getBookmarks();
  const exists = bookmarks.find((j) => j.id === job.id);

  if (!exists) {
    bookmarks.push(job);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
};

// Remove bookmark
export const removeBookmark = (id) => {
  const bookmarks = getBookmarks().filter((j) => j.id !== id);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

// Toggle (add/remove)
export const toggleBookmark = (job) => {
  const bookmarks = getBookmarks();
  const exists = bookmarks.find((j) => j.id === job.id);

  if (exists) {
    removeBookmark(job.id);
  } else {
    addBookmark(job);
  }
};
