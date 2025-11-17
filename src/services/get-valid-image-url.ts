// services/get-valid-image-url.ts
export default function getValidImageUrl(
  galleryNumber: number,
  fileFirstName?: string,
  filename?: string
): string {
  const extensions = ["jpg", "png", "webp", "jpeg", "avif"];
  
  // If filename is provided (for festivals)
  if (filename) {
    const testFilename = filename.includes(".")
      ? filename
      : `${filename}.jpg`; // Default to .jpg
    
    return `/assets/img/${testFilename}`;
  }
  
  // Handle destination images using fileFirstName parameter
  if (fileFirstName === "destination" && galleryNumber) {
    // Try different naming patterns for destinations
    const patterns = [
      `/assets/img/destination-${galleryNumber}`,
      `/assets/img/tourismpics${galleryNumber}`,
      `/assets/img/destination${galleryNumber}`,
      `/images/destination-${galleryNumber}`,
    ];
    
    for (const pattern of patterns) {
      for (const ext of extensions) {
        // Return the first combination
        return `${pattern}.${ext}`;
      }
    }
  }
  
  // Fallback for destination images using just numbers
  if (galleryNumber) {
    return `/assets/img/destination-${galleryNumber}.jpg`;
  }
  
  // Final fallback
  return `/images/placeholder.jpg`;
}