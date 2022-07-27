import { useState } from 'react';
import s from './info.module.scss';

const Info = () => {
  const [step, setStep] = useState(1);
  return (
    <section className={s.container}>
      <div className={s.selector}>
        <div
          className={s.box}
          style={{ background: step === 1 ? 'rgb(7, 55, 198)' : 'rgb(148, 159, 164)' }}
          onClick={() => setStep(1)}>
          <h4>Community</h4>
        </div>

        <div
          className={s.box}
          style={{ background: step === 2 ? 'rgb(7, 55, 198)' : 'rgb(148, 159, 164)' }}
          onClick={() => setStep(2)}>
          <h4>Service</h4>
        </div>
        <div
          className={s.box}
          style={{ background: step === 3 ? 'rgb(7, 55, 198)' : 'rgb(148, 159, 164)' }}
          onClick={() => setStep(3)}>
          <h4>Connection</h4>
        </div>
        <div
          className={s.box}
          style={{ background: step === 4 ? 'rgb(7, 55, 198)' : 'rgb(148, 159, 164)' }}
          onClick={() => setStep(4)}>
          <h4>Growth</h4>
        </div>
      </div>

      {step === 1 && (
        <div className={s.row}>
          <img src='/info-2-test.jpg' alt='Community at Cole Valley Christian' />
          <div className={s.text}>
            <h3>Join Together</h3>
            <p>
              Our students love to support friends and show up in force to cheer each other on.
              Whether your student plays a sport or performs in a play, or whether they are a
              spectator, there is a place for them to connect at CVCS.
            </p>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={s.row}>
          <div className={s.text}>
            <h3>Serving Others</h3>
            <p>
              believe that to help our students grow socially and relationally, they should be
              equipped to serve in their churches, in their communities and beyond.
            </p>
          </div>
          <img src='/info-3-test.jpg' alt='Service at Cole Valley Christian' />
        </div>
      )}
      {step === 3 && (
        <div className={s.row}>
          <img src='/info-4-test.jpg' alt='Connection at Cole Valley Christian' />
          <div className={s.text}>
            <h3>You Are Known</h3>
            <p>
              It is important to us to make sure our students are known. We give them opportunities
              to connect with adults and other students in smaller classroom and group settings.
            </p>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className={s.row}>
          <div className={s.text}>
            <h3>Biblical Infusion</h3>
            <p>
              At Cole Valley Christian Schools, we don&apos;t just want our students learning about
              God, we want them to know Him personally. Scripture is the basis for every subject we
              teach, not just Bible class.
            </p>
          </div>
          <img src='/info-1-test.jpg' alt='Spiritual Growth at Cole Valley Christian' />
        </div>
      )}
    </section>
  );
};

export default Info;
