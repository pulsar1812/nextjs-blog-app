import Image from 'next/image';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/me.png'
          alt='An image of me'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am No One!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        suscipit qui quidem fugit maxime ab animi doloribus, libero quo ea saepe
        id totam, cumque in aliquid sed impedit aperiam cum.
      </p>
    </section>
  );
}
