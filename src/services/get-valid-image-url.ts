// services/get-valid-image-url.ts
export default function getValidImageUrl(
  galleryNumber: number,
  fileFirstName?: string,
  filename?: string
): string {
  // If filename is provided (for festivals)
  if (filename) {
    const testFilename = filename.includes(".")
      ? filename
      : `${filename}.jpg`; // Default to .jpg
    
    return `/assets/img/${testFilename}`;
  }
  
  // Handle destination images using fileFirstName parameter
  if (fileFirstName === "destination" && galleryNumber) {
    // Return destination image with hyphen format: destination-1, destination-2, etc.
    return `/assets/img/destination-${galleryNumber}.jpg`;
  }
  
  // Fallback for destination images using just numbers
  if (galleryNumber) {
    return `/assets/img/destination-${galleryNumber}.jpg`;
  }
  
  // Final fallback
  return `/images/placeholder.jpg`;
}