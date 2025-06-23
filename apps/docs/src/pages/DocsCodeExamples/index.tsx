import { Box, Typography } from '@mui/material'

import { CodeBlock, PageWrapperDocs } from '../../components'

const CodeExamples = () => {
  return (
    <PageWrapperDocs>
      <Box>
        <Typography variant="h1" gutterBottom>
          Code Examples
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Practical examples showing how to implement easter eggs in different scenarios and frameworks.
        </Typography>

        <Typography variant="h2" gutterBottom>
          React Example
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Here's how to integrate easter eggs into a React application:
        </Typography>

        <CodeBlock
          language="typescript"
          code={`import React, { useEffect } from 'react';
import { initializeEeaas } from '@eeaas/core';

function App() {
  useEffect(() => {
    const eeaas = initializeEeaas();

    // Register a simple easter egg
    eeaas.register({
      name: 'ReactEgg',
      trigger: {
        type: 'keys',
        keystrokes: ['r', 'e', 'a', 'c', 't'],
        captureOnInputs: false
      },
      onStart() {
        document.body.style.background = 'linear-gradient(45deg, #61dafb, #21232a)';
        console.log('React easter egg activated!');
      },
      onStop() {
        document.body.style.background = '';
        console.log('React easter egg deactivated!');
      }
    });

    // Auto-cleanup on unmount
    return () => {
      const egg = eeaas.get('ReactEgg');
      if (egg) {
        egg.stop();
      }
    };
  }, []);

  return (
    <div className="App">
      <h1>My React App</h1>
      <p>Type "react" to trigger the easter egg!</p>
    </div>
  );
}

export default App;`}
        />

        <Typography variant="h2" gutterBottom>
          Vanilla JavaScript Example
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Using easter eggs in a plain HTML/JavaScript project:
        </Typography>

        <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Easter Eggs Demo</title>
</head>
<body>
    <h1>My Website</h1>
    <p>Try typing "secret" or "konami" followed by the Konami code!</p>

    <script src="https://unpkg.com/@eeaas/core@latest/dist/eeaas.min.js"></script>
    <script>
        const eeaas = _eeaas.initializeEeaas();

        // Secret message easter egg
        eeaas.register({
            name: 'SecretMessage',
            trigger: {
                type: 'keys',
                keystrokes: ['s', 'e', 'c', 'r', 'e', 't']
            },
            onStart() {
                alert('🎉 You found the secret message!');
            },
            onStop() {
                console.log('Secret message dismissed');
            }
        });

        // Konami code easter egg
        eeaas.register({
            name: 'KonamiCode',
            trigger: {
                type: 'keys',
                keystrokes: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                           'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
                           'KeyB', 'KeyA']
            },
            resources: [{
                type: 'css',
                content: \`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .konami-active {
                        animation: spin 2s linear infinite;
                    }
                \`
            }],
            onStart(resources) {
                document.body.classList.add('konami-active');
                setTimeout(() => {
                    document.body.classList.remove('konami-active');
                }, 3000);
            },
            onStop() {
                document.body.classList.remove('konami-active');
            }
        });
    </script>
</body>
</html>`}</CodeBlock>

        <Typography variant="h2" gutterBottom>
          Advanced Example with Resources
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          This example shows how to load external resources and create more complex easter eggs:
        </Typography>

        <CodeBlock
          language="javascript"
          code={`import { initializeEeaas } from '@eeaas/core';

const eeaas = initializeEeaas();

eeaas.register({
  name: 'PartyMode',
  trigger: {
    type: 'keys',
    keystrokes: ['p', 'a', 'r', 't', 'y']
  },
  resources: [
    {
      type: 'css',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    },
    {
      type: 'script',
      content: \`
        function createConfetti() {
          // Confetti creation logic
          const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
          for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = \`
              position: fixed;
              width: 10px;
              height: 10px;
              background: \${colors[Math.floor(Math.random() * colors.length)]};
              left: \${Math.random() * 100}vw;
              top: -10px;
              z-index: 9999;
              animation: fall 3s linear forwards;
            \`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
          }
        }

        const style = document.createElement('style');
        style.textContent = \`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
            }
          }
        \`;
        document.head.appendChild(style);
      \`
    }
  ],
  async onStart(resources) {
    // Wait for resources to load
    await new Promise(resolve => setTimeout(resolve, 100));

    // Add party animations
    document.body.classList.add('animate__animated', 'animate__pulse');

    // Create confetti effect
    if (window.createConfetti) {
      window.createConfetti();
    }

    // Change background
    document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradientShift 2s ease infinite';

    console.log('🎉 Party mode activated!');
  },
  async onStop() {
    // Clean up party effects
    document.body.classList.remove('animate__animated', 'animate__pulse');
    document.body.style.background = '';
    document.body.style.animation = '';

    console.log('Party mode deactivated');
  }
});`}
        />

        <Typography variant="h2" gutterBottom>
          TypeScript Support
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          The library includes full TypeScript support. Here's an example with proper typing:
        </Typography>

        <CodeBlock
          language="typescript"
          code={`import { initializeEeaas, UserEgg, LoadedResource } from '@eeaas/core';

interface CustomEggData {
  message: string;
  duration: number;
}

const eeaas = initializeEeaas();

const myEgg: UserEgg = {
  name: 'TypedEgg',
  enabled: true,
  trigger: {
    type: 'keys',
    keystrokes: ['t', 'y', 'p', 'e', 'd'],
    captureOnInputs: false
  },
  resources: [
    {
      type: 'css',
      content: '.typed-egg { color: #2563eb; font-weight: bold; }'
    }
  ],
  onStart: async (resources: LoadedResource[]): Promise<void> => {
    const data: CustomEggData = {
      message: 'TypeScript easter egg activated!',
      duration: 3000
    };

    console.log(data.message);

    setTimeout(() => {
      const egg = eeaas.get('TypedEgg');
      egg?.stop();
    }, data.duration);
  },
  onStop: async (): Promise<void> => {
    console.log('TypeScript easter egg stopped');
  }
};

eeaas.register(myEgg);`}
        />

        <Typography variant="body1" color="text.secondary">
          These examples demonstrate the flexibility and power of the Easter eggs as a service library. You can create
          simple text-based triggers, complex visual effects, or even load external resources to enhance your easter
          eggs.
        </Typography>
      </Box>
    </PageWrapperDocs>
  )
}

export default CodeExamples
