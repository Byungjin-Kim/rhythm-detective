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

export const preloadCatImages = {
  type: jsPsychPreload,
  images: catImages,
};
