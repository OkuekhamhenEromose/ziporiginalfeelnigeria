// services/get-destination-image.ts
export default function getDestinationImage(imageSrc: number): string {
  const extensions = ["jpg", "png", "webp", "jpeg", "avif"];
  
  // Try different path patterns for destination images
  const pathPatterns = [
    `/images/destination/${imageSrc}`,
    `/images/destinations/${imageSrc}`,
    `/assets/images/destination/${imageSrc}`,
    `/assets/img/tourismpics${imageSrc}`,
  ];

  // Try each path pattern with each extension
  for (const pattern of pathPatterns) {
    for (const ext of extensions) {
      // Just return the first combination - browser will handle the loading
      return `${pattern}.${ext}`;
    }
  }
  
  // Fallback
  return `/images/placeholder.jpg`;
}