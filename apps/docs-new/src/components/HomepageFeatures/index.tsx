import clsx from 'clsx'
import { Code, Gauge, ShieldCheck } from 'lucide-react'
import type { JSX } from 'react'

import styles from './styles.module.css'

const Component = (): JSX.Element => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className={styles.card}>
              <div className="text--center">
                <Gauge size={40} />
              </div>
              <div className="text--center padding-horiz--md">
                <h3>Zero Dependencies</h3>
                <p>Pure JavaScript implementation with no external dependencies.</p>
                <p>
                  <strong>2.2kB</strong> / 5.9kB (uncompressed)
                </p>
              </div>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className={styles.card}>
              <div className="text--center">
                <ShieldCheck size={40} />
              </div>
              <div className="text--center padding-horiz--md">
                <h3>Safe & Secure</h3>
                <p>Designed to be non-intrusive and safe without affecting your app's performance.</p>
                <p>All features are opt-in.</p>
              </div>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className={styles.card}>
              <div className="text--center">
                <Code size={40} />
              </div>
              <div className="text--center padding-horiz--md">
                <h3>Easy Integration</h3>
                <p>Simple API that works with any framework, even stock standard JavaScript and HTML.</p>
                <p>No fancy tools required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Component
