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

  // toComponentDidMount(contentDom) {
  //   contentDom.on('refresh', e => {
  //     this.fetch();
  //   });
  //   F7.pullToRefreshTrigger(contentDom);
  // }
    
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
      </div>
    );
  }
}

module.exports = {
  pageTitle: '设置',
  pageContent: PageContent
};