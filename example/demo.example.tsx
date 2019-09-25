import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './demo.example.scss'
import Button from '../lib/button/button';

interface Props {
  code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (<Highlight {...defaultProps} code={props.code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
    </Highlight>
  );
  return (
    <div>
      <div className="component-show-ct">
        {props.children}
      </div>
      <div className="code-show-ct">
        <Button btnType='primary' onClick={()=>setCodeVisible(!codeVisible)}>查看代码</Button>
        {codeVisible && code}
      </div>
      <div>

      </div>
    </div>
  );
};

export default Demo;