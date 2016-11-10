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
      <div className='ucenter base-container'>
        <div className="list-block">
          <ul>
            <ListElementA title='工作' iconClass='icon-hongben green' dataPage='work'/>
            <ListElementA title='通讯录' iconClass='icon-contacts red' dataPage='work'/>
            <ListElementA title='动态' iconClass='icon-like orange' dataPage='work'/>
          </ul>
        </div>
        <div className="list-block">
          <ul>
            <ListElementA title='设置' iconClass='icon-automatic blue' dataPage='setting'/>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = {
  pageContent: PageContent
};