// import { useState, createElement } from 'react';
// import * as AllSfComponents from '@storefront-ui/react';
import { component$ } from '@builder.io/qwik';
// import useSWR from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default component$(() => {
  // const [copied, setCopied] = useState('');
  // const { data: componentsNames = [] } = useSWR<string[]>(
  //   `${process.env.VITE_DOCS_EXAMPLES_REACT_PATH || ''}/api/getIcons`,
  //   fetcher,
  // );

  // const copyToClipboard = (componentName: string) => {
  //   navigator.clipboard.writeText(componentName);
  //   setCopied(componentName);
  //   setTimeout(() => {
  //     setCopied('');
  //   }, 1000);
  // };

  return (
    <> TODO
      {/* {componentsNames.map((componentName) => (
        <button
          type="button"
          key={componentName}
          class="inline-block border cursor-pointer"
          data-tooltip={componentName}
          onClick$={() => {
            copyToClipboard(componentName);
          }}
        >
          {createElement((AllSfComponents as Record<string, any>)[componentName])}
        </button>
      ))}

      {copied && <p class="mt-1 text-sm">&quot;{copied}&quot; has been copied to clipboard</p>} */}
    </>
  );
}
)