import "style/ucenter.less";
import BaseModule from './baseModule';
import ListElementA from './component/listElementA';

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

  toRender() {
    let data = this.state.data;
    return (
      <div className='setting base-container'>
        <div className="list-block">
          <ul>
            <ListElementA title='关于我们' dataPage='work'/>
            <ListElementA title='用户协议' dataPage='work'/>
          </ul>
        </div>
        <div className="list-block">
          <ul>
            <ListElementA title='意见反馈' dataPage='work'/>
            <ListElementA title='招聘合作' dataPage='work'/>
          </ul>
        </div>
        <div className="list-block sortable">
          <ul>
            <li>
              <div className="item-content">
                <div className="item-inner">
                  <div className="item-title">退出登录</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = {
  navbar: `<div class="left theme-black">
            <a href="#" class="back link"><i class="icon icon-back"></i><span>我的</span></a>
            </div>
            <div class="center sliding">设置</div>
            <div class="right"></div>
            `,
  pageContent: PageContent
};