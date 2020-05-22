const Model = function () {

    const triggleDrawer = () => {
        let result = { ... this.state };
        result.visible = !result.visible;
        return this.setState( result );
    }

    const onClickMain = () => {
        this.props.history.push('/Main');
    }

    const onUserClick = () => {
        this.props.history.push('/User');
    }

    const onDriverClick = () => {
        this.props.history.push('/Driver');
    }

    const onOrderClick = () => {
        this.props.history.push('/Order');
    }

    const onDataClick = () => {
        this.props.history.push('/Data');
    }

    return { 
        triggleDrawer,
        onClickMain,
        onUserClick,
        onDriverClick,
        onOrderClick,
        onDataClick
    };
};

export default Model;
