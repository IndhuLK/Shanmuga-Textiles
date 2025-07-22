import React, { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
const SliderContext = createContext(undefined);

const defaultSlides = [
  {
    id: "1",
    title: "Summer Collection 2024",
    subtitle: "Discover Your Style",
    description:
      "Explore our latest summer collection with trendy designs and comfortable fits.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: "2",
    title: "Special Offers",
    subtitle: "Up to 50% Off",
    description:
      "Don't miss our amazing deals on selected items. Limited time offer!",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    buttonText: "View Deals",
    buttonLink: "/shop",
  },
  {
    id: "3",
    title: "New Arrivals",
    subtitle: "Fresh & Trendy",
    description:
      "Check out our newest products and stay ahead of the fashion trends.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    buttonText: "Explore",
    buttonLink: "/shop",
  },
];

const SLIDES_COLLECTION = "slides";

const STORAGE_KEY = "slider-slides";

export const SliderProvider = ({ children }) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSlides = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, SLIDES_COLLECTION));
      const fetchedSlides = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSlides(fetchedSlides);
    } catch (error) {
      console.error("Error fetching slides:", error);
    } finally {
      setLoading(false);
    }
  };

  const addSlide = async (slide) => {
    try {
      const docRef = await addDoc(collection(db, SLIDES_COLLECTION), slide);
      setSlides((prev) => [...prev, { id: docRef.id, ...slide }]);
    } catch (error) {
      console.error("Error adding slide:", error);
    }
  };

  const updateSlide = async (id, updatedSlide) => {
    try {
      const docRef = doc(db, SLIDES_COLLECTION, id);
      await updateDoc(docRef, updatedSlide);
      setSlides((prev) =>
        prev.map((s) => (s.id === id ? { ...s, ...updatedSlide } : s))
      );
    } catch (error) {
      console.error("Error updating slide:", error);
    }
  };

  const deleteSlide = async (id) => {
    try {
      const docRef = doc(db, SLIDES_COLLECTION, id);
      await deleteDoc(docRef);
      setSlides((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting slide:", error);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <SliderContext.Provider
      value={{
        slides,
        loading,
        addSlide,
        updateSlide,
        deleteSlide,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (context === undefined) {
    throw new Error("useSlider must be used within a SliderProvider");
  }
  return context;
};

// Helper functions for localStorage
// const loadSlidesFromStorage = () => {
//   try {
//     const stored = localStorage.getItem(STORAGE_KEY);
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return Array.isArray(parsed) && parsed.length > 0
//         ? parsed
//         : defaultSlides;
//     }
//   } catch (error) {
//     console.error("Error loading slides from localStorage:", error);
//   }
//   return defaultSlides;
// };

// const saveSlidesToStorage = (slides) => {
//   try {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
//   } catch (error) {
//     console.error("Error saving slides to localStorage:", error);
//   }
// };

// export const SliderProvider = ({ children }) => {
//   const [slides, setSlides] = useState([]);

//   // Load slides from localStorage on mount
//   useEffect(() => {
//     const loadedSlides = loadSlidesFromStorage();
//     setSlides(loadedSlides);
//   }, []);

//   // Save slides to localStorage whenever slides change
//   useEffect(() => {
//     if (slides.length > 0) {
//       saveSlidesToStorage(slides);
//     }
//   }, [slides]);

//   const addSlide = (slide) => {
//     const newSlide = {
//       ...slide,
//       id: Date.now().toString(),
//     };
//     setSlides((prev) => {
//       const updated = [...prev, newSlide];
//       return updated;
//     });
//   };

//   const updateSlide = (id, updatedSlide) => {
//     setSlides((prev) => {
//       const updated = prev.map((slide) =>
//         slide.id === id ? { ...slide, ...updatedSlide } : slide
//       );
//       return updated;
//     });
//   };

//   const deleteSlide = (id) => {
//     setSlides((prev) => {
//       const updated = prev.filter((slide) => slide.id !== id);
//       return updated;
//     });
//   };

//   return (
//     <SliderContext.Provider
//       value={{ slides, addSlide, updateSlide, deleteSlide }}
//     >
//       {children}
//     </SliderContext.Provider>
//   );
// };

// export const useSlider = () => {
//   const context = useContext(SliderContext);
//   if (context === undefined) {
//     throw new Error("useSlider must be used within a SliderProvider");
//   }
//   return context;
// };
