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
        <div className="list-block media-list">
          <ul>
            <li>
              <div className="item-content">
                <div className="item-media"><img src="http://7xplwg.com1.z0.glb.clouddn.com/default_avatar.png" width="44" /></div>
                <div className="item-inner">
                  <div className="item-title-row">
                    <div className="item-title">Mario</div>
                  </div>
                  <div className="item-subtitle">帐号:1234567890</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
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