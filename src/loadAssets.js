import jsPsychPreload from '@jspsych/plugin-preload';

import cat1 from './assets/cats/1.jpg';
import cat2 from './assets/cats/2.jpg';
import cat3 from './assets/cats/3.jpg';
import cat4 from './assets/cats/4.jpg';
import cat5 from './assets/cats/5.jpg';

const catImages = [cat1, cat2, cat3, cat4, cat5];

// Create arrays of hot dog / not hot dog images
const numFiles = 5;
const hotDogFiles = Array.from(Array(numFiles), (_, i) => i + 1).map(
  (idx) => `https://storage.googleapis.com/roar-hot-dog-images/hotdog/${idx}.jpg`,
);

const notHotDogFiles = Array.from(Array(numFiles), (_, i) => i + 1).map(
  (idx) => `https://storage.googleapis.com/roar-hot-dog-images/nothotdog/${idx}.jpg`,
);

// Dog images (for Block 2) - Using cloud URLs instead of local files
const dogFiles = Array.from(Array(numFiles), (_, i) => i + 1).map(
  (idx) => `https://storage.googleapis.com/roar-hot-dog-images/dog/${idx}.jpg`,
);

// Block 1: Hot Dog vs. Not Hot Dog
const allFiles = hotDogFiles.concat(notHotDogFiles);
export const allTargets = allFiles.map((url) => ({
  target: `<img src="${url}" width=250 height=250>`,
  isHotDog: !url.includes('nothotdog'),
}));

/* preload images */
export const preloadImages = {
  type: jsPsychPreload,
  images: allFiles,
};

// Block 2: cat vs. dog

const block2Files = catImages.concat(dogFiles);
export const block2Targets = block2Files.map((url) => ({
  target: `<img src="${url}" width=250 height=250>`,
  isDog: url.includes('dog'),
}));

// Preload the cat/dog images
export const preloadBlock2Images = {
  type: jsPsychPreload,
  images: block2Files,
};

export const preloadCatImages = {
  type: jsPsychPreload,
  images: catImages,
};
