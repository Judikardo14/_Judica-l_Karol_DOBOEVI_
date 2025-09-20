/**
 * Utility function to smoothly scroll to a section with offset compensation
 * @param sectionId - The ID of the section to scroll to
 * @param offset - The offset in pixels to compensate for fixed navigation (default: 80)
 */
export function scrollToSection(sectionId: string, offset: number = 80): void {
  console.log(`Scrolling to section: ${sectionId}`);
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    console.log(`Element found, scrolling to position: ${elementPosition}`);
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  } else {
    console.error(`Element with ID '${sectionId}' not found`);
  }
}

/**
 * Utility function to download a file
 * @param filepath - The path to the file in the public folder
 * @param filename - The desired filename for download
 */
export function downloadFile(filepath: string, filename: string): void {
  console.log(`Downloading file: ${filepath} as ${filename}`);
  try {
    const link = document.createElement('a');
    link.href = filepath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download initiated successfully');
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}