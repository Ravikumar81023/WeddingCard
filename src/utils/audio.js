// Web Audio API Synthesizer for UI sound effects

let audioCtx = null;

export function getAudioContext() {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  } catch (e) {
    console.warn("AudioContext error:", e);
  }
  return audioCtx;
}

export function playWaxSealClickSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.18);

    gain.gain.setValueAtTime(0.9, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.23);

    // Subtle noise pop
    const bufferSize = Math.floor(0.12 * ctx.sampleRate);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (2 * Math.random() - 1) * (Math.random() < 0.3 ? 1 : 0.1);
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.6, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    whiteNoise.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    whiteNoise.start(t);
  } catch (err) {
    console.warn("Error playing seal sound", err);
  }
}

export function playScratchSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const bufferSize = Math.floor(0.08 * ctx.sampleRate);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (2 * Math.random() - 1) * Math.exp(-i / (0.3 * bufferSize));
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1800;
    filter.Q.value = 3;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    whiteNoise.start();
  } catch (err) {
    console.warn("Error playing scratch sound", err);
  }
}

export function playCrackerCelebrationSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(180 + 60 * Math.random(), t);
        osc.frequency.exponentialRampToValueAtTime(25, t + 0.5);

        gain.gain.setValueAtTime(0.9, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.51);

        // Burst
        const burstSize = Math.floor(0.15 * ctx.sampleRate);
        const burstBuffer = ctx.createBuffer(1, burstSize, ctx.sampleRate);
        const burstData = burstBuffer.getChannelData(0);
        for (let j = 0; j < burstSize; j++) {
          burstData[j] = (2 * Math.random() - 1) * Math.exp(-j / (0.15 * burstSize));
        }

        const burstSrc = ctx.createBufferSource();
        burstSrc.buffer = burstBuffer;
        const burstFilter = ctx.createBiquadFilter();
        burstFilter.type = "highpass";
        burstFilter.frequency.value = 3000;

        const burstGain = ctx.createGain();
        burstGain.gain.setValueAtTime(1.2, t);
        burstGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

        burstSrc.connect(burstFilter);
        burstFilter.connect(burstGain);
        burstGain.connect(ctx.destination);
        burstSrc.start(t);

        // Crackles
        const crackleSize = Math.floor(0.4 * ctx.sampleRate);
        const crackleBuffer = ctx.createBuffer(1, crackleSize, ctx.sampleRate);
        const crackleData = crackleBuffer.getChannelData(0);
        for (let j = 0; j < crackleSize; j++) {
          crackleData[j] = 0.3 * (2 * Math.random() - 1) * Math.exp(-j / (0.4 * crackleSize));
        }

        const crackleSrc = ctx.createBufferSource();
        crackleSrc.buffer = crackleBuffer;
        const crackleFilter = ctx.createBiquadFilter();
        crackleFilter.type = "bandpass";
        crackleFilter.frequency.value = 6000;
        crackleFilter.Q.value = 0.5;

        const crackleGain = ctx.createGain();
        crackleGain.gain.setValueAtTime(0.5, t + 0.05);
        crackleGain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

        crackleSrc.connect(crackleFilter);
        crackleFilter.connect(crackleGain);
        crackleGain.connect(ctx.destination);
        crackleSrc.start(t + 0.05);
      }, 280 * i + 60 * Math.random());
    }
  } catch (err) {
    console.warn("Error playing cracker sound", err);
  }
}
