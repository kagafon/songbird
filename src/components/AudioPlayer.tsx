import * as React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import PlayIcon from 'assets/images/play.svg';
import PauseIcon from 'assets/images/pause.svg';

export interface AudioPlayerProps {
  track: string;
  playing?: boolean;
  pause?: boolean;
  loop?: boolean;
}

export const StyledAudioPlayer = ({
  track,
  playing,
  loop,
  pause,
}: AudioPlayerProps): JSX.Element => {
  const player = React.useRef<AudioPlayer>(null);
  React.useEffect(() => {
    if (pause && player && player.current) {
      player.current.audio.current.pause();
    }
  }, [pause, player]);
  return (
    <AudioPlayer
      autoPlay={playing}
      src={track}
      showJumpControls={false}
      autoPlayAfterSrcChange={false}
      layout="horizontal"
      loop={loop}
      ref={player}
      customProgressBarSection={[
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.VOLUME,
      ]}
      customVolumeControls={[RHAP_UI.CURRENT_TIME]}
      customAdditionalControls={[RHAP_UI.DURATION]}
      customControlsSection={[]}
      customIcons={{
        play: <PlayIcon />,
        pause: <PauseIcon />,
      }}
    />
  );
};
