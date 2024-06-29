import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `App | ${title}`;
  }, [title]);
};

export default UseTitle;
