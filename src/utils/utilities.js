const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("it-IT", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export { formatDate };
