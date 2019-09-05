import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
  // console.log((e.target as HTMLDivElement).style); //用断言的方法测试
}

ReactDOM.render(<div>
  <Icon name="wechatpay" 
        onClick={fn}
        onMouseEnter={()=>{console.log('onMouseEnter')}}
        onMouseLeave={()=>{console.log('onMouseLeave')}}
  />
  <Icon name="alipay" onClick={fn} />
  <Icon name="cardpay" onClick={fn} />
</div>, document.querySelector("#root"));
