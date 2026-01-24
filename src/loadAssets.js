import jsPsychPreload from '@jspsych/plugin-preload';

import sound01 from './assets/sounds/01_piano_3-4_1.mp3';
import sound02 from './assets/sounds/02_piano_4-4_1.mp3';
import sound03 from './assets/sounds/03_drum_4-4_1.mp3';
import sound04 from './assets/sounds/04_drum_3-4_1.mp3';
import sound05 from './assets/sounds/05_clarinet_4-4_1.mp3';
import sound06 from './assets/sounds/06_clarinet_3-4_1.mp3';
import sound07 from './assets/sounds/07_piano_3-4_2.mp3';
import sound08 from './assets/sounds/08_piano_4-4_2.mp3';
import sound09 from './assets/sounds/09_clarinet_4-4_2.mp3';
import sound10 from './assets/sounds/10_clarinet_3-4_2.mp3';

// All audio files used in the experiment
const allAudioFiles = [
  sound01, sound02, sound03, sound04, sound05,
  sound06, sound07, sound08, sound09, sound10,
];

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
