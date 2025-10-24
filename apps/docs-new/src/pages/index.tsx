import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import { ArrowRight, CirclePlay, Code } from 'lucide-react'
import { useState } from 'react'
import type { JSX } from 'react'

import { HomepageFeatures } from '../components'
import styles from './index.module.css'

const avatar = (secretRevealed = false, clickCount = 0) => {
  return {
    width: '100px',
    height: '100px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: clickCount > 0 ? `scale(${Math.pow(1.2, clickCount)})` : 'scale(1)',
    backgroundColor: secretRevealed ? '#77dd77' : 'transparent',
    border: '3px solid',
    borderRadius: secretRevealed ? '50px' : 0,
    borderColor: secretRevealed ? '#fff' : 'transparent',
    '&:hover': {
      transform: `scale(${Math.pow(1.2, clickCount)})`,
    },
    zIndex: 1,
  }
}
const Page = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  const [clickCount, setClickCount] = useState(0)

  const handleAvatarClick = () => {
    setClickCount((prev) => prev + 1)
  }

  const handleReset = () => {
    setClickCount(0)
  }

  return (
    <Layout title="Eeaas" description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img
            src="img/logo-512x512-transparent.png"
            alt="Eeaas Logo"
            style={avatar(clickCount >= 5, clickCount)}
            onClick={handleAvatarClick}
          />

          <Heading as="h1" className="hero__title" style={{ marginTop: '10px' }}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>Built with modern JavaScript.</p>

          <div className={styles.buttons}>
            <Link
              className={`${styles.button} button button--primary button--lg`}
              style={{ border: '1px solid var(--ifm-color-primary-lightest)' }}
              to="/docs/examples/nyancat"
            >
              View Examples <ArrowRight />
            </Link>
            <Link
              className={`${styles.button} button button--primary button--lg`}
              style={{ border: '1px solid var(--ifm-color-primary-lightest)' }}
              to="/docs/docs/getting-started"
            >
              <CirclePlay /> Get Started
            </Link>
          </div>

          {clickCount >= 20 ? (
            <button className={styles.resetButton} onClick={handleReset}>
              Reset
            </button>
          ) : null}
        </div>
      </header>

      <main>
        <div className="container text--center" style={{ maxWidth: 800, marginTop: 50 }}>
          <h2 style={{ fontSize: 32 }}>Why?</h2>
          <p className={styles.more}>I once nearly got fired for adding easter eggs to a production app.</p>
          <p className={styles.more}>
            This library not only helps you keep the easter egg code out of the production code you ship to your users,
            but it also makes it really easy to add easter eggs to any project.
          </p>
          <p className={styles.more}>Easter eggs make apps and websites more fun, so go ahead and add them.</p>
        </div>

        <HomepageFeatures />

        <div className="container text--center" style={{ maxWidth: 800, margin: '50px auto 100px' }}>
          <h2 style={{ fontSize: 20 }}>Get Started</h2>
          <p className={styles.more}>
            Explore examples to see different types of easter eggs in action. Each example demonstrates a different
            technique and use case.
          </p>

          <div className={styles.buttons}>
            <Link className={`${styles.button} button button--primary button--lg`} to="/docs/examples/nyancat">
              Explore Examples <ArrowRight />
            </Link>
            <Link
              className={`${styles.button} button button--primary button--lg button--outline`}
              to="/docs/docs/getting-started"
            >
              <Code /> Documentation
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Page
