const Model = function () {

    const troggleMenu = () => {
        let result = { ...this.state};
        result.open = !result.open;
        return this.setState( result );
    }

    const onChange = ( value ) => {
        return this.props.onChange(value);
    }

    const onCancel = () => {
        let result = { ...this.state};
        result.open = false;
        this.props.onCancel( result.origin );
        return this.setState( result );
    }

    const onConfirm = () => {
        let result = { ...this.state };
        result.open = false;
        result.origin = this.props.value;
        this.props.onSubmit( this.props.value );
        return this.setState( result );
    }

    return { troggleMenu, onChange, onCancel, onConfirm };
};

export default Model;