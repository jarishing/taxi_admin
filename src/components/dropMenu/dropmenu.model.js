const Model = function () {

    const troggleMenu = () => {
        let result = { ...this.state};
        result.open = !result.open;
        return this.setState( result );
    }

    // const onChange = (e) => {
    //     let result = { ...this.state };
    //     result.timeRange = e.target.value;
    //     return this.setState( result );
    // }

    const onCancel = () => {
        let result = { ...this.state};
        result.open = false;
        this.props.onCancel();
        return this.setState( result );
    }

    const onConfirm = () => {
        let result = { ...this.state };

        this.props.onSubmit( this.props.value );
        result.open = false;
        return this.setState( result );
    }

    return { troggleMenu, onCancel, onConfirm };
};

export default Model;