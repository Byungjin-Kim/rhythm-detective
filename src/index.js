// jsPsych imports
import jsPsychFullScreen from '@jspsych/plugin-fullscreen';
import jsPsychHtmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

// Import plugin for playing audio files
import jsPsychAudioKeyboardResponse from '@jspsych/plugin-audio-keyboard-response';

// Import necessary for async in the top level of the experiment script
import 'regenerator-runtime/runtime';

// CSS imports
import './css/roar.css';

// Local modules
import { initConfig, initRoarJsPsych, initRoarTimeline } from './config';

// Import Audio Assets and Preload from loadAssets.js
import {
  audioTargets,
  preloadAudio,
} from './loadAssets';

// ---------Initialize the jsPsych object and the timeline---------
const config = await initConfig();
const jsPsych = initRoarJsPsych(config);
const timeline = initRoarTimeline(config);

// ---------Preload Media Here---------
// Preload audio files for the experiment instead of images
timeline.push(preloadAudio);

// ---------Create trials---------
/* define welcome message trial */
const welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h3>Rhythm Syntax Task</h3>
    <p>Hello and welcome to the task!</p>
    <p>In this task, you will hear short musical clips.</p>
    
    <div class="instruction-box">
      <p>If you hear a <strong>3-beat rhythm (Waltz, "Rum-pa-pa")</strong>,:<br>
      Press the <span class="key-text blue">[ ← Left Arrow ]</span> key.</p>

      <p>If you hear a <strong>4-beat rhythm (March, "One-two-three-four")</strong>,:<br>
      Press the <span class="key-text blue">[ → Right Arrow ]</span> key.</p>
    </div>

    <p>Press any key to continue</p>
    `,
};
timeline.push(welcome);

const hotDogTrials = {
  timeline: [
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: 'NO_KEYS',
      trial_duration: 500,
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: jsPsych.timelineVariable('target'),
      choices: ['ArrowLeft', 'ArrowRight'],
      prompt: `
        <p>Is this a hot dog?</p>
        <p>If yes, press the right arrow key.</p>
        <p>If no, press the left arrow key.</p>
      `,
      data: {
        // Here is where we specify that we should save the trial to Firestore
        save_trial: true,
        // Here we can also specify additional information that we would like stored
        // in this trial in ROAR's Firestore database.
      },
    },
  ],
  timeline_variables: allTargets,
  sample: {
    type: 'without-replacement',
    size: 10,
  },
};

timeline.push(hotDogTrials);

const block2Instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h3>Great job!</h3>
    <p>
      Now, press the right arrow key if the displayed image is of a dog.
      Press the left arrow key if the displayed image is of a cat.
    </p>
    <p>Press any key to continue</p>
  `,
};

timeline.push(preloadBlock2Images);
timeline.push(block2Instructions);

const catDogTrials = {
  timeline: [
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: 'NO_KEYS',
      trial_duration: 500,
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: jsPsych.timelineVariable('target'),
      choices: ['ArrowLeft', 'ArrowRight'],
      prompt: `
        <p>Is this a cat or a dog?</p>
        <p>If cat, press the right arrow key.</p>
        <p>If dog, press the left arrow key.</p>
      `,
      data: {
        task: 'test_response',
        save_trial: true,
      },
    },
  ],
  timeline_variables: block2Targets,
  sample: {
    type: 'without-replacement',
    size: 10,
  },
};

timeline.push(catDogTrials);

const endTrial = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p>Great job!</p><p>Press any key to exit.</p>',
  choices: 'ALL_KEYS',
  response_ends_trial: true,
};

timeline.push(endTrial);

const exit_fullscreen = {
  type: jsPsychFullScreen,
  fullscreen_mode: false,
  delay_after: 0,
};

timeline.push(exit_fullscreen);

jsPsych.run(timeline);
