import { useEffect } from "react";

export const useDetectOutsideClick = (ref, funcToExecute) => {
  useEffect(() => {
    // call funcToExecute if the user clicked outside of the ref
    const handleClickOutside = (event) => {
      console.log('ref', ref.current)
      if (ref.current && !ref.current.contains(event.target)) {
        funcToExecute();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up event listener
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, funcToExecute]);
};
