import type { NavItem } from '../types'
import { ROUTES } from './routes'

export const MISC = {}

export const DOCS = {
  GETTING_STARTED: {
    GETTING_STARTED: {
      TITLE: 'Getting Started',
      ID: 'getting-started',
    },
    INSTALLATION: {
      TITLE: 'Installation',
      ID: 'installation',
    },
    BASIC_USAGE: {
      TITLE: 'Basic Usage',
      ID: 'basic-usage',
    },
    RECOMMENED_WORKFLOW: {
      TITLE: 'Recommended Workflow',
      ID: 'recommended-workflow',
    },
    TRIGGERS: {
      TITLE: 'Triggers',
      ID: 'triggers',
    },
  },
  API_REFERENCE: {
    API_REFERENCE: {
      TITLE: 'API Reference',
      ID: 'api-reference',
    },
    EEAAS_INSTANCE: {
      TITLE: 'Eeaas Instance',
      ID: 'eeaas-instance',
    },
    EGG_INSTANCE: {
      TITLE: 'Egg Instance',
      ID: 'egg-instance',
    },
    EGG_PROPERTIES: {
      TITLE: 'Egg Properties',
      ID: 'egg-properties',
    },
    TRIGGER_TYPES: {
      TITLE: 'Trigger Types',
      ID: 'trigger-types',
    },
    RESOURCE_TYPES: {
      TITLE: 'Resource Types',
      ID: 'resource-types',
    },
  },
  CODE_EXAMPLES: {
    CODE_EXAMPLES: {
      TITLE: 'Code Examples',
      ID: 'code-examples',
    },
    VANILLA_JS: {
      TITLE: 'Vanilla JS Example',
      ID: 'vanilla-js-example',
    },
    REACT: {
      TITLE: 'React Example',
      ID: 'react-example',
    },
    TYPESCRIPT: {
      TITLE: 'TypeScript Example',
      ID: 'typescript-example',
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
        label: DOCS.GETTING_STARTED.RECOMMENED_WORKFLOW.TITLE,
        hash: `#${DOCS.GETTING_STARTED.RECOMMENED_WORKFLOW.ID}`,
      },
      {
        label: DOCS.GETTING_STARTED.TRIGGERS.TITLE,
        hash: `#${DOCS.GETTING_STARTED.TRIGGERS.ID}`,
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
      {
        label: DOCS.API_REFERENCE.TRIGGER_TYPES.TITLE,
        hash: `#${DOCS.API_REFERENCE.TRIGGER_TYPES.ID}`,
      },
      {
        label: DOCS.API_REFERENCE.RESOURCE_TYPES.TITLE,
        hash: `#${DOCS.API_REFERENCE.RESOURCE_TYPES.ID}`,
      },
    ],
  },
  {
    label: DOCS.CODE_EXAMPLES.CODE_EXAMPLES.TITLE,
    route: ROUTES.DOCS__CODE_EXAMPLES,
    hash: `#${DOCS.CODE_EXAMPLES.CODE_EXAMPLES.ID}`,
    children: [
      {
        label: DOCS.CODE_EXAMPLES.REACT.TITLE,
        hash: `#${DOCS.CODE_EXAMPLES.REACT.ID}`,
      },
      {
        label: DOCS.CODE_EXAMPLES.TYPESCRIPT.TITLE,
        hash: `#${DOCS.CODE_EXAMPLES.TYPESCRIPT.ID}`,
      },
      {
        label: DOCS.CODE_EXAMPLES.VANILLA_JS.TITLE,
        hash: `#${DOCS.CODE_EXAMPLES.VANILLA_JS.ID}`,
      },
    ],
  },
]

export const EXAMPLES = {
  OVERVIEW: {
    TITLE: 'Overview',
    DESCRIPTION: `Explore different types of easter eggs and learn how to implement them in your own project. Each example demonstrates a unique technique with interactive demonstrations and code explanations.`,
  },
  NYANCAT: {
    TITLE: 'Nyancat',
    DESCRIPTION: `Turn your cursor into nyancat. You can still fully interact with the entire page.`,
  },
  SNAKE: {
    TITLE: 'Snake',
    DESCRIPTION: `Launch a full screen snake game.`,
  },
  CSS_INJECTION: {
    TITLE: 'CSS Injection',
    DESCRIPTION: `These examples demonstrate how to inject CSS into the DOM.`,
  },
  JAVASCRIPT_INJECTION: {
    TITLE: 'JavaScript Injection',
    DESCRIPTION: `These examples demonstrate how to inject JS into the DOM.`,
  },
  KONAMI: {
    TITLE: 'Konami',
    DESCRIPTION: `Shows keystrokes on the screen.`,
  },
}

export const examplesNavItems: NavItem[] = [
  {
    label: EXAMPLES.OVERVIEW.TITLE,
    route: ROUTES.EXAMPLES,
  },
  {
    label: EXAMPLES.NYANCAT.TITLE,
    route: ROUTES.EXAMPLES__NYANCAT,
  },
  {
    label: EXAMPLES.SNAKE.TITLE,
    route: ROUTES.EXAMPLES__SNAKE,
  },
  {
    label: EXAMPLES.KONAMI.TITLE,
    route: ROUTES.EXAMPLES__KONAMI,
  },
  {
    label: EXAMPLES.CSS_INJECTION.TITLE,
    route: ROUTES.EXAMPLES__CSS_INJECTION,
  },
  {
    label: EXAMPLES.JAVASCRIPT_INJECTION.TITLE,
    route: ROUTES.EXAMPLES__JAVASCRIPT_INJECTION,
  },
]
