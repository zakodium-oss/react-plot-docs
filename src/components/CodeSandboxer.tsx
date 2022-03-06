import React, { useCallback, useState } from 'react';
import LZString from 'lz-string';

const sandboxConfig = {
  template: 'create-react-app',
};
const indexHtmlContent = '<div id="root"></div>';
const indexTsxContent = `import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Example';

ReactDOM.render(
<App />,
document.getElementById('root')
);
`;

function getPackageJsonContent(
  name: string,
  dependencies: Record<string, string>,
) {
  const extendedDependencies = {
    ...dependencies,
    react: 'latest',
    'react-dom': 'latest',
  };
  return `
{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.tsx",
  "dependencies": ${JSON.stringify(extendedDependencies, null, 2)}
}
    `;
}

interface CodeSandboxerProps {
  name: string;
  source: string;
  dependencies: Record<string, string>;
}

export default function CodeSandboxer(props: CodeSandboxerProps) {
  const { state, onClick } = useDeploySandbox(props);
  return (
    <button type="button" onClick={onClick} disabled={state.loading}>
      {state.error ? state.error : 'Open sandbox'}
    </button>
  );
}

interface DeployState {
  error: string;
  loading: boolean;
}

function useDeploySandbox(props: CodeSandboxerProps) {
  const [state, setState] = useState<DeployState>({
    loading: false,
    error: '',
  });

  const onClick = useCallback(async () => {
    setState({ loading: true, error: '' });
    try {
      const { dependencies, name, source } = props;
      const files = {
        'index.html': {
          content: indexHtmlContent,
          // isBinary: false,
        },
        'index.tsx': {
          content: indexTsxContent,
        },
        'package.json': {
          content: getPackageJsonContent(name, dependencies),
        },
        'sandbox.config.json': {
          content: JSON.stringify(sandboxConfig),
        },
        'Example.tsx': {
          content: source,
        },
      };
      const parameters = getParameters({ files });

      const { sandboxUrl } = await sendFilesToCSB(parameters, {
        fileName: 'Example.tsx',
      });
      window.open(sandboxUrl);
    } catch {
      setState({ error: 'Error', loading: false });
    }
  }, [props]);

  return { state, onClick };
}

async function sendFilesToCSB(
  parameters: string,
  config: { fileName: string; type?: string },
): Promise<{ sandboxId: string; sandboxUrl: string }> {
  let formData = new FormData();
  formData.append('parameters', parameters);

  const response = await fetch(
    'https://codesandbox.io/api/v1/sandboxes/define?json=1',
    {
      method: 'post',
      body: formData,
      mode: 'cors',
    },
  );
  const { errors, sandbox_id } = await response.json();
  if (errors) {
    throw new Error('sandbox api call failed');
  }
  return {
    sandboxId: sandbox_id,
    sandboxUrl: getSandboxUrl(sandbox_id, config.fileName, config.type),
  };
}

function getSandboxUrl(id: string, fileName: string, type: string = 's') {
  return `https://codesandbox.io/${type}/${id}?module=/${fileName}`;
}

function compress(input) {
  return LZString.compressToBase64(input)
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='
}
function getParameters(files) {
  return compress(JSON.stringify(files));
}
