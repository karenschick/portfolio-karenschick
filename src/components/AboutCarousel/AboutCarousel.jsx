import React, { useEffect, useState } from "react"; // Import React and necessary hooks
import { Carousel } from "react-bootstrap"; // Import Carousel component from React-Bootstrap

// Array of image paths to be displayed in the carousel
const imagePaths = [
  "/portfolio-karenschick/1.jpg",
  "/portfolio-karenschick/2.jpg",
  "/portfolio-karenschick/3.jpg",
  "/portfolio-karenschick/4.jpg",
  "/portfolio-karenschick/5.jpg",
  "/portfolio-karenschick/6.jpg",
  "/portfolio-karenschick/7.jpg",
  "/portfolio-karenschick/8.jpg",
  "/portfolio-karenschick/9.jpg",
];

/**
 * Determines the orientation of an image based on its dimensions
 * @param {string} url - The image URL
 * @returns {Promise<string>} - Orientation type
 */
const getOrientation = (url) => {
  return new Promise((resolve) => {
    // Create a new image element
    const img = new Image();
    // When the image is loaded
    img.onload = () => {
      // Destructure loaded image's with and height
      const { width, height } = img;
      // Calculate absolute difference between width and height
      const diff = Math.abs(width - height);

      // If width and height are same (diffence less than 1%)
      if (diff < width * 0.01) {
        resolve("square"); // It's a square
      }
      // If width is greather than the height
      else if (width > height) {
        resolve("landscape"); // It's landscape
      }
      // If width is greather than the height
      else {
        resolve("portrait"); // It's portrait
      }
    };
    // Start loading image by setting its source
    img.src = url;
  });
};

function AboutCarousel() {
  // State to hold image data including orientation
  const [images, setImages] = useState([]);
  // Flag to check if images have finished loading
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Async function to load all images and determine orientation
    const loadImagesWithOrientation = async () => {
      const withOrientation = await Promise.all(
        imagePaths.map(async (src) => {
          const orientation = await getOrientation(src); // Get orientation
          return { src, orientation }; // Return image data with orientation
        })
      );
      setImages(withOrientation); // Update state with loaded images
      setLoaded(true); // Set loaded flag to true
    };

    loadImagesWithOrientation(); // Trigger image loading on mount
  }, []);

  // Display a placeholder height while images load
  if (!loaded) return <div style={{ height: "600px" }} />;

  return (
    <>
      <div className="carousel-image-wrapper">
        <Carousel
          fade
          pause={false}
          interval={3000}
          indicators={false}
          controls={false}
          slide={false}
        >
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-wrapper">
                <img
                  className="about-carousel-image"
                  src={img.src}
                  alt={`${index + 1}`} // Alt text based on index
                  loading="lazy" // Lazy load for performance
                  style={{
                    // height: "100%", // Always the same height
                    width:
                      img.orientation === "portrait" ||
                      img.orientation === "square"
                        ? "auto"
                        : "100%", // Landscape fills width
                    objectFit: "contain", // Prevents cropping
                    transition: "all 0.3s ease", // Smooth transition on load
                  }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default AboutCarousel;
