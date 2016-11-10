export default class ListElementA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
       
  }

  media(){
    if(this.props.iconClass){
      return(<div className="item-media"><i className={ "icon iconfont " + this.props.iconClass }></i></div>)
    }else{
      return(null)
    }
  }

  render() {
    return(
      <li>
        <a href="#" className="item-link" data-page={ this.props.dataPage }>
          <div className="item-content">
            { this.media() }
            <div className="item-inner">
              <div className="item-title">{ this.props.title }</div>
            </div>
          </div>
        </a>
      </li>
    )
  }
};

