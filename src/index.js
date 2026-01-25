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
      Press the <span class="key-text red">[ → Right Arrow ]</span> key.</p>
    </div>

    <p>Press any key to start</p>
    `,
};
timeline.push(welcome);

// 2. Define the main rhythm experimental trials
const rhythmTrials = {
  timeline: [
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: 'NO_KEYS',
      trial_duration: 500,
    },
    { // Audio stimulus with keyboard response
      type: jsPsychAudioKeyboardResponse,
      stimulus: jsPsych.timelineVariable('sound'),
      choices: ['ArrowLeft', 'ArrowRight'],
      prompt: `
        <div class="prompt-box">
          <p>Which rhythm did you hear?</p>
          <p>
            <span class="key-text blue">[←] 3/4 (3-beat)</span>
            &nbsp;&nbsp;&nbsp;&nbsp; 
            <span class="key-text red">[→] 4/4 (4-beat)</span>
          </p>
        </div>
      `,
      data: {
        // Here is where we specify that we should save the trial to Firestore
        task: 'rhythm_syntax',
        save_trial: true,
        correct_response: jsPsych.timelineVariable('correct_response'),
        music_type: jsPsych.timelineVariable('type'),
        instrument: jsPsych.timelineVariable('instrument'),
        // in this trial in ROAR's Firestore database.
      },
    },
  ],
  timeline_variables: audioTargets,
  sample: {
    type: 'without-replacement',
    size: 10,
  },
};

timeline.push(rhythmTrials);

// 3. Define end of experiment trial
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
