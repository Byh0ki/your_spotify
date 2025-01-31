import { ReactNode } from 'react';
import { dateToListenedAt } from '../../../services/stats';
import { getAtLeastImage } from '../../../services/tools';
import { SpotifyImage } from '../../../services/types';
import Text from '../../../components/Text';
import TitleCard from '../../../components/TitleCard';
import s from './index.module.css';

interface FirstAndLastProps {
  firstImages: SpotifyImage[];
  lastImages: SpotifyImage[];
  firstDate: Date;
  lastDate: Date;
  firstElement: ReactNode;
  lastElement: ReactNode;
}

export default function FirstAndLast({
  firstDate,
  lastDate,
  firstImages,
  lastImages,
  firstElement,
  lastElement,
}: FirstAndLastProps) {
  return (
    <TitleCard title="First and last time listened">
      <div className={s.item}>
        <img
          className={s.cover}
          src={getAtLeastImage(lastImages, 48)}
          alt="album cover"
        />
        <div className={s.stat}>
          <Text element="strong">{lastElement}</Text>
          <Text>Last listened on {dateToListenedAt(new Date(lastDate))}</Text>
        </div>
      </div>
      <div className={s.item}>
        <img
          className={s.cover}
          src={getAtLeastImage(firstImages, 48)}
          alt="cover"
        />
        <div className={s.stat}>
          <Text element="strong">{firstElement}</Text>
          <Text>First listened on {dateToListenedAt(new Date(firstDate))}</Text>
        </div>
      </div>
    </TitleCard>
  );
}
