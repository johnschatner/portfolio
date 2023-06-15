import React, { useState, useEffect } from "react";
import "./SkeletonImage.css";

const SkeletonImage = ({
  children,
  delay = 0,
  className = "",
  skeletonClassName = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions] = useState({ width: 80, height: 80 });

  useEffect(() => {
    console.log("Reloading image");
    const imgElement = React.Children.only(children);
    const img = new Image();
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    };
    img.src = imgElement.props.src;
  }, []);

  return (
    <div
      className={`skeleton-image-wrapper ${
        isLoading ? "loading" : ""
      } ${className}`}
    >
      {isLoading && (
        <div
          className={`skeleton-image ${skeletonClassName}`}
          style={{ width: dimensions.width, height: dimensions.height }}
        />
      )}
      {React.cloneElement(children, {
        style: { opacity: isLoading ? 0 : 1 },
      })}
    </div>
  );
};

export default SkeletonImage;
