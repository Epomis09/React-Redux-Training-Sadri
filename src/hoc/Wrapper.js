const Wrapper = (WrappedComponent, className) => {
    return (props) => ( 
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default Wrapper;