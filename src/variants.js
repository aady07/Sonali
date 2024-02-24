export const fadeIn = (scrollY) => {
  return {
    hidden: {
      opacity: 0,
      y: scrollY, // Start at the desired scroll position
    },
    show: {
      opacity: 1,
      y: 0, // Scroll to the top of the page
      transition: {
        type: 'tween',
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth scroll
      },
    },
  };
};
