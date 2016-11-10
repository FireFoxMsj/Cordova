import BaseModule from './baseModule';

class PageContent extends BaseModule {
    constructor(props) {
        super(props);
        this.state = {
            pullToRefresh: 1,
            data: {
                
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    toComponentDidMount(contentDom) {
        contentDom.on('refresh', e => {
            this.fetch();
        });
        F7.pullToRefreshTrigger(contentDom);
    }
    
    toRender() {
        let data = this.state.data;
        return (
            <div className='base-container'>
                
            </div>
        );
    }
}

module.exports = {
    pageContent: PageContent
};