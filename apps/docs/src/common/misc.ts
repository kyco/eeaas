import type { NavItem } from '../types'
import { ROUTES } from './routes'

export const MISC = {}

export const DOCS = {
  GETTING_STARTED: {
    GETTING_STARTED: {
      TITLE: 'Getting started',
      ID: 'getting-started',
    },
    INSTALLATION: {
      TITLE: 'Installation',
      ID: 'installation',
    },
    BASIC_USAGE: {
      TITLE: 'Basic usage',
      ID: 'basic-usage',
    },
    BUILDING_YOUR_OWN: {
      TITLE: 'Building your own egg',
      ID: 'build-your-own',
    },
  },
  API_REFERENCE: {
    API_REFERENCE: {
      TITLE: 'API reference',
      ID: 'api-reference',
    },
    EEAAS_INSTANCE: {
      TITLE: 'The eeaas instance',
      ID: 'eeaas-instance',
    },
    EGG_INSTANCE: {
      TITLE: 'Egg instance',
      ID: 'egg-instance',
    },
    EGG_PROPERTIES: {
      TITLE: 'Egg properties',
      ID: 'egg-properties',
    },
  },
}

export const docsNavItems: NavItem[] = [
  {
    label: DOCS.GETTING_STARTED.GETTING_STARTED.TITLE,
    route: ROUTES.DOCS__GETTING_STARTED,
    hash: `#${DOCS.GETTING_STARTED.GETTING_STARTED.ID}`,
    children: [
      {
        label: DOCS.GETTING_STARTED.INSTALLATION.TITLE,
        hash: `#${DOCS.GETTING_STARTED.INSTALLATION.ID}`,
      },
      {
        label: DOCS.GETTING_STARTED.BASIC_USAGE.TITLE,
        hash: `#${DOCS.GETTING_STARTED.BASIC_USAGE.ID}`,
      },
      {
        label: DOCS.GETTING_STARTED.BUILDING_YOUR_OWN.TITLE,
        hash: `#${DOCS.GETTING_STARTED.BUILDING_YOUR_OWN.ID}`,
      },
    ],
  },
  {
    label: DOCS.API_REFERENCE.API_REFERENCE.TITLE,
    route: ROUTES.DOCS__API_REFERENCE,
    hash: `#${DOCS.API_REFERENCE.API_REFERENCE.ID}`,
    children: [
      {
        label: DOCS.API_REFERENCE.EEAAS_INSTANCE.TITLE,
        hash: `#${DOCS.API_REFERENCE.EEAAS_INSTANCE.ID}`,
      },
      {
        label: DOCS.API_REFERENCE.EGG_INSTANCE.TITLE,
        hash: `#${DOCS.API_REFERENCE.EGG_INSTANCE.ID}`,
      },
      {
        label: DOCS.API_REFERENCE.EGG_PROPERTIES.TITLE,
        hash: `#${DOCS.API_REFERENCE.EGG_PROPERTIES.ID}`,
      },
    ],
  },
  // { label: 'Code examples', route: ROUTES.DOCS__CODE_EXAMPLES },
]
