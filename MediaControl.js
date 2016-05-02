const ffi = require('ffi');
const user32 = ffi.Library('user32', {
    'keybd_event': ['void', ['int', 'int', 'int', 'int']]
});
const KEYEVENTF_KEYUP = 2;
const VK_MEDIA_PLAY_PAUSE = 179;
const VK_MEDIA_NEXT_TRACK = 176;
const VK_MEDIA_PREV_TRACK = 177;
const VK_VOLUME_MUTE = 173;
const VK_VOLUME_UP = 175;
const VK_VOLUME_DOWN = 174;

module.exports = {
    play : function () {
      user32.keybd_event(VK_MEDIA_PLAY_PAUSE, 69, 0, 0);
      user32.keybd_event(VK_MEDIA_PLAY_PAUSE, 69, KEYEVENTF_KEYUP, 0);
    },
    prevTrack:function () {
      user32.keybd_event(VK_MEDIA_PREV_TRACK, 69, 0, 0);
      user32.keybd_event(VK_MEDIA_PREV_TRACK, 69, KEYEVENTF_KEYUP, 0);
    },
    nextTrack:function () {
      user32.keybd_event(VK_MEDIA_NEXT_TRACK, 69, 0, 0);
      user32.keybd_event(VK_MEDIA_NEXT_TRACK, 69, KEYEVENTF_KEYUP, 0);
    },
    mute:function () {
      user32.keybd_event(VK_VOLUME_MUTE, 69, 0, 0);
      user32.keybd_event(VK_VOLUME_MUTE, 69, KEYEVENTF_KEYUP, 0);
    },
    volumeUp:function () {
      user32.keybd_event(VK_VOLUME_UP, 69, 0, 0);
      user32.keybd_event(VK_VOLUME_UP, 69, KEYEVENTF_KEYUP, 0);
    },
    volumeDown:function () {
      user32.keybd_event(VK_VOLUME_DOWN, 69, 0, 0);
      user32.keybd_event(VK_VOLUME_DOWN, 69, KEYEVENTF_KEYUP, 0);
    }
};
