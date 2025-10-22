import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import { ArrowRight, CirclePlay, Egg, FlaskConical } from 'lucide-react'
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
          <p style={{ opacity: 0.7 }}>Built with modern JavaScript.</p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/examples"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid var(--ifm-color-primary-lightest)',
                borderRadius: '8px',
              }}
            >
              <FlaskConical /> View Examples
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid var(--ifm-color-primary-lightest)',
                borderRadius: '8px',
              }}
            >
              <CirclePlay /> Get Started
            </Link>
          </div>

          {clickCount >= 20 ? (
            <button
              style={{
                position: 'absolute',
                bottom: 40,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                padding: '12px 27px',
                backgroundColor: 'var(--ifm-color-primary)',
                border: '5px solid #fff',
                borderRadius: 100,
                fontWeight: 'bold',
                fontSize: '18px',
                cursor: 'pointer',
              }}
              onClick={handleReset}
            >
              Reset
            </button>
          ) : null}
        </div>
      </header>

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

export default Page
