import "style/ucenter.less";
import BaseModule from './baseModule';

class PageContent extends BaseModule {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  // toComponentDidMount(contentDom) {
  //   contentDom.on('refresh', e => {
  //     this.fetch();
  //   });
  //   F7.pullToRefreshTrigger(contentDom);
  // }
    
  toRender() {
    let data = this.state.data;
    return (
      <div className='ucenter base-container'>
        <div className="list-block">
          <ul>
            <li>
              <a href="accordion.html" className="item-link">
                <div className="item-content">
                  <div className="item-media"><i className="icon iconfont icon-hongben green"></i></div>
                  <div className="item-inner">
                    <div className="item-title">工作</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="accordion.html" className="item-link">
                <div className="item-content">
                  <div className="item-media"><i className="icon iconfont icon-contacts red"></i></div>
                  <div className="item-inner">
                    <div className="item-title">通讯录</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="accordion.html" className="item-link">
                <div className="item-content">
                  <div className="item-media"><i className="icon iconfont icon-like orange"></i></div>
                  <div className="item-inner">
                    <div className="item-title">动态</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="list-block">
          <ul>
            <li>
              <a href="accordion.html" className="item-link">
                <div className="item-content">
                  <div className="item-media"><i className="icon iconfont icon-automatic blue"></i></div>
                  <div className="item-inner">
                    <div className="item-title">设置</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = {
  pageContent: PageContent
};