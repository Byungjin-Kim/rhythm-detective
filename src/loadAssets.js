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

// Define Targets for the audio clips
export const audioTargets = [
  { sound: sound01, correct_response: 'ArrowLeft', meter: '3/4', instrument: 'piano' },
  { sound: sound02, correct_response: 'ArrowRight', meter: '4/4', instrument: 'piano' },
  { sound: sound03, correct_response: 'ArrowRight', meter: '4/4', instrument: 'drum' },
  { sound: sound04, correct_response: 'ArrowLeft', meter: '3/4', instrument: 'drum' },
  { sound: sound05, correct_response: 'ArrowRight', meter: '4/4', instrument: 'clarinet' },
  { sound: sound06, correct_response: 'ArrowLeft', meter: '3/4', instrument: 'clarinet' },
  { sound: sound07, correct_response: 'ArrowLeft', meter: '3/4', instrument: 'piano' },
  { sound: sound08, correct_response: 'ArrowRight', meter: '4/4', instrument: 'piano' },
  { sound: sound09, correct_response: 'ArrowRight', meter: '4/4', instrument: 'clarinet' },
  { sound: sound10, correct_response: 'ArrowLeft', meter: '3/4', instrument: 'clarinet' },
];

// Preload audio files
export const preloadAudio = {
  type: jsPsychPreload,
  audio: allAudioFiles,
};
